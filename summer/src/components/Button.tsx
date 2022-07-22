import React from "react";
import Sparkels from "./Sparkles";
import { Button, Box } from "@chakra-ui/react";

interface Props {
  txt: string;
  clicked: () => void;
}

export const Btn: React.FC<Props> = ({ txt, clicked }) => {
  return (
    <Box>
      <Button
        onClick={clicked}
        mt={"30px"}
        w={"100%"}
        bg={"#FBD5A2"}
        fontWeight={"bold"}
        _hover={{ background: "#FBD5A2" }}
        _focus={{ background: "#FBD5A2" }}
        borderRadius={"12px"}
        padding={"24px"}
      >
        {txt}
      </Button>
    </Box>
  );
};
