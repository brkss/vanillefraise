import React from "react";
import {
  Center,
  Spinner,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useVerifyAccountMutation } from "../generated/graphql";

export const VerifyAccount: React.FC = () => {
  const [verify] = useVerifyAccountMutation();
  const { token } = useParams() as any;
  const [checked, setChecked] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [message, setMessage] = React.useState("");
  //const { }

  React.useEffect(() => {
    if (token) {
      verify({
        variables: {
          token: token,
        },
      }).then((res) => {
        setChecked(true);
        if (res.errors || !res.data) {
          setStatus(false);
          setMessage("Something went wrong !");
        } else {
          setStatus(res.data.verifyAccount.status);
          setMessage(res.data.verifyAccount.message || "");
        }
      });
    }
  }, []);

  if (checked) {
    return (
      <Center h={"100vh"}>
        <Alert
          w={"auto"}
          borderRadius={"7px"}
          status={status ? "success" : "warning"}
        >
          <AlertIcon />
          <AlertTitle>{message} </AlertTitle>
        </Alert>
      </Center>
    );
  }

  return (
    <Center h={"100vh"}>
      <Spinner size={"sm"} />
    </Center>
  );
};
