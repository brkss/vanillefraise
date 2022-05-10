import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CDN } from '../../utils/config/defaults';

interface Props {
  title: string;
  description?: string | null;
  image?: string;
  supress: () => void;
}

export const ListItem: React.FC<Props> = ({ title, description, image, supress }) => {
  return (
    <Box
      mb={"10px"}
      bg={"#fbf3ed"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      backgroundImage={`${CDN}/${image}`}
      borderRadius={"13px"}
      pos={"relative"}
      minH={"200px"}
    >
      <Box
        minH={"200px"}
        p={"20px"}
        bg={"#000000a6"}
        rounded={"13px"}
        zIndex={100}
        color={"white"}
      >
        <FaRegTrashAlt cursor={'pointer'} onClick={() => supress()} size={15} style={{ marginBottom: 10 }} />
        <Text fontWeight={"bold"} fontSize={"23px"} mb={"5px"}>
          {title}
        </Text>
        <Text fontSize={"13px"}>{description}</Text>
      </Box>
      {/*
      <Box
        height={"100%"}
        w={"100%"}
        pos={"absolute"}
        background={"black"}
        opacity={0.5}
        top={0}
        left={0}
        zIndex={6}
        borderRadius={"13px"}
    />
        */}
    </Box>
  );
};
