import React from "react";
import { Input } from "@chakra-ui/react";

interface Props {
  placeholder: string;
  type?: string;
}

export const Inpt: React.FC<Props> = ({ placeholder, type }) => {
  return (
    <Input
      fontWeight={"bold"}
      _focus={{ background: "#E7E4E4" }}
      variant={"filled"}
      size={"lg"}
      placeholder={placeholder}
      type={type ? type : "text"}
      bg={"#E7E4E4"}
    />
  );
};
