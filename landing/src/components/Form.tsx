import React from "react";
import { Box, Text, Input, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { Error } from "./Error";
import { OS } from "./OS";
<OS onSelect={() => {}} />;
interface Props {
  status: string;
  message: string;
  onValidate: (email: string, name: string, os: string) => void;
}

export const Form: React.FC<Props> = ({ onValidate, message, status }) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [name, setName] = React.useState("");
  const [os, setOs] = React.useState("IOS");

  React.useEffect(() => {
    if (status === "success") {
      setEmail("");
      setName("");
    }
  }, [status]);

  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!os || (os !== "Android" && os !== "IOS")) {
      setError("Invalid Device Type !");
    } else if (!name) {
      setError("Name cannot be blank");
      return false;
    } else if (name.length < 4) {
      setError("Invalid Name !");
      return false;
    } else if (!email) {
      setError("Email cannot be blank !");
      return false;
    } else if (!regex.test(email)) {
      setError("Invalid Email Format !");
      return false;
    }
    setError("");
    onValidate(email, name, os);
  };

  return (
    //<Box w={{ md: "60%", base: "100%" }} m={"auto"}>
    <Box>
      {error && <Error text={error} />}
      {status === "error" && <Error text={message} />}
      {status === "success" && (
        <Alert mb={"10px"} status="success">
          <AlertIcon />
          Thank you ! You'll recieve an invitation soon.
        </Alert>
      )}
      <Text fontSize={"20px"} fontWeight={"bold"}>
        GET EARLY ACCESS
      </Text>
      <Input
        mb={"10px"}
        _focus={{ outline: 0 }}
        borderRadius={0}
        //border={"5px solid #464646"}
        //borderColor={"#464646"}
        p={"30px 20px"}
        fontWeight={"bold"}
        fontSize={"30px"}
        type={"text"}
        placeholder={"name"}
        background={"#ededed"}
        //placeholder={'example@example.com'}
        disabled={status === "sending"}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <Input
        _focus={{ outline: 0 }}
        borderRadius={0}
        //border={"5px solid #464646"}
        //borderColor={"#464646"}
        p={"30px 20px"}
        fontWeight={"bold"}
        fontSize={"30px"}
        type={"email"}
        placeholder={"email"}
        background={"#ededed"}
        //placeholder={'example@example.com'}
        disabled={status === "sending"}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <OS onSelect={(val: string) => setOs(val)} />
      <Button
        onClick={() => validate()}
        _hover={{ background: "black", opacity: 0.7, transition: ".3s" }}
        transition={".3s"}
        mt={"10px"}
        p={"25px 10px"}
        //w={"105px"}
        borderRadius={0}
        fontSize={"30px"}
        fontWeight={"bold"}
        color={"white"}
        bg={"black"}
        loadingText={"Sending..."}
        isLoading={status === "sending"}
      >
        SEND
      </Button>
    </Box>
  );
};
