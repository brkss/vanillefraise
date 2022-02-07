import { Resolver, Query } from "type-graphql";
import { stripe } from "../../utils/stripe";
import Stripe from "stripe";
import { PricingResponse } from "../../utils/responses";

@Resolver()
export class PricingResolver {
  @Query(() => [PricingResponse])
  async pricing(): Promise<PricingResponse[]> {
    const prices = await stripe.prices.list({
      expand: ["data.product"],
    });
    // map pricing and products
    let filtered_prices = prices.data.filter((price) => price.active);
    const data = filtered_prices.map((price) => {
      const prod = price.product as Stripe.Product;
      return {
        priceID: price.id,
        amount: price.unit_amount || 0,
        currency: price.currency,
        productID: prod.id,
        productName: prod.name,
      };
    });
    return data;
  }
}
