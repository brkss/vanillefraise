import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  txt: string;
  clicked: () => void;
}

export const Btn: React.FC<Props> = ({ txt, clicked }) => {
  return (
    <Button
      onClick={() => clicked()}
      bg={"#C8A9B6"}
      mt={"10px"}
      _hover={{ background: "#AE8B99" }}
      w={"130px"}
    >
      {txt}
    </Button>
  );
};
