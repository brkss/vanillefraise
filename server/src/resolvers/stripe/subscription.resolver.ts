import { Resolver, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { CreateSubscritionInput } from "../../utils/inputs";
import { StripeDefaultResponse } from "../../utils/responses/stripe/DefaultResponse";
import { isUserAuth } from "../../utils/middlewares";
import { IContext } from "../../utils/types/Context";
import { stripe } from "../../utils/stripe";

@Resolver()
export class SubscriptionResolver {
  @Mutation(() => StripeDefaultResponse)
  @UseMiddleware(isUserAuth)
  async createSubscription(
    @Arg("data") data: CreateSubscritionInput,
    @Ctx() { payload }: IContext
  ): Promise<StripeDefaultResponse> {
    if (!data || !data.priceID || !data.paymentMethodID) {
      return {
        status: false,
        message: "Invalid Data !",
      };
    }

    const user = await User.findOne({ where: { id: payload.userID } });
    if (!user) {
      return {
        status: false,
        message: "User not found !",
      };
    }

    // check if user already a stripe costumer
    if (!user.stripeID) {
      const { id } = await stripe.customers.create({
        name: user.name,
        email: user.email,
      });
      user.stripeID = id;
      await user.save();
    }
    await stripe.paymentMethods.attach(data.paymentMethodID, {
      customer: user.stripeID,
    });

    const { status } = await stripe.subscriptions.create({
      customer: user.stripeID,
      items: [
        {
          price: data.priceID,
        },
      ],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });

    if (!status) {
      return {
        status: false,
        message: "Something went wrong creating this payment",
      };
    }

    return {
      status: true,
      message: "Payment created successfuly",
    };
  }
}
