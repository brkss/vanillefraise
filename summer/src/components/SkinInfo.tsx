import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
}

export const SkinInfo: React.FC<Props> = ({
  emoji,
  description,
  title,
  subtitle,
}) => {
  return (
    <Box pos={"relative"} p={"10px 20px "} rounded={"13px"} bg={"#FEE0AB"} mb={'20px'}>
      <Box>
        <Text display={"inline"} fontWeight={"bold"}>
          {title}
        </Text>
        <Text display={"inline"} ml={"5px"}>
          {subtitle}
        </Text>
      </Box>
      <Text fontSize={"13px"}>{description}</Text>
      <Text pos={'absolute'} top={'50%'} right={'13px'} fontSize={'22px'} transform={'translateY(-50%)'}>{emoji}</Text>
    </Box>
  );
};
