import React from "react";
import { Input, Center, Button, Text } from "@chakra-ui/react";
import { Alert } from "../Alert";

export const Form: React.FC = () => {
  const [error, SetError] = React.useState("");
  return (
    <Center h={{ md: "100%", base: "50vh" }}>
      {error && (
        <Alert type={"warn"} txt={"🙄 This email is alredy registred !"} />
      )}
      {false && <Alert type={"succ"} txt={"✅ you'll hear from us soon !"} />}
      <form method="POST" name={"maillist"}>
        <input type="hidden" name="form-name" value="maillist" />
        <Text fontWeight={"bold"} fontSize={"17px"} opacity={0.7} mb={"5px"}>
          Join Waiting List
        </Text>
        <Input
          type={"email"}
          id="email"
          name={"email"}
          fontWeight={"bold"}
          _focus={{ background: "#E7E4E4" }}
          variant={"filled"}
          size={"lg"}
          placeholder={"Email"}
          bg={"#E7E4E4"}
          required
        />
        <Button
          type={"submit"}
          bg={"#C8A9B6"}
          mt={"10px"}
          _hover={{ background: "#AE8B99" }}
          w={"130px"}
        >
          Join.
        </Button>
      </form>
    </Center>
  );
};
