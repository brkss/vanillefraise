import React from "react";
import {
  Box,
  Center,
  Spinner,
  Button,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentSuccess } from "./Success";
import {
  usePricingQuery,
  useCreateSubscriptionMutation,
} from "../../generated/graphql";

export const Checkout: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, SetLoading] = React.useState(false);
  const [paid, SetPaid] = React.useState(false);
  const [selectedPlan, SetSelectedPlan] = React.useState("");
  const [subscribe] = useCreateSubscriptionMutation();
  const _pricing = usePricingQuery();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (elements == null || !selectedPlan) {
      return;
    }
    SetLoading(true);
    const res = await stripe!.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement) as any,
    });
    const _res = await subscribe({
      variables: {
        priceID: selectedPlan,
        paymentMethodID: res.paymentMethod!.id,
      },
    });
    console.log("res => ", _res.data!);
    SetLoading(false);
    if (!res.error && !_res.errors && _res.data!.createSubscription.status)
      SetPaid(true);
    console.log("res => ", res);
  };

  if (_pricing.loading) {
    return (
      <Center h={"100vh"}>
        <Spinner />
      </Center>
    );
  }

  if (paid) {
    return <PaymentSuccess />;
  }

  return (
    <Center h={"100vh"}>
      <Box w={"300px"}>
        <SimpleGrid mb={"10px"} columns={2} spacing={7}>
          {_pricing.data!.pricing.map((price, key) => (
            <Box
              border={selectedPlan == price.priceID ? "1px dotted gray" : ""}
              onClick={() => SetSelectedPlan(price.priceID)}
              key={key}
              cursor={"pointer"}
              p={"10px"}
              bg={"#faf2ff"}
              rounded={"7px"}
            >
              <Text fontWeight={"bold"} fontSize={"15px"}>
                {price.productName}
              </Text>
              <Text>
                {price.amount / 100} {price.currency}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <form onSubmit={handleSubmit}>
          <CardElement className={"light"} />
          <Button
            size={"sm"}
            loadingText={"submiting..."}
            isLoading={loading}
            type={"submit"}
            disabled={!stripe || !elements}
          >
            Pay
          </Button>
        </form>
      </Box>
    </Center>
  );
};
