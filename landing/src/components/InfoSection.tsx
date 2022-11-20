import React from "react";
import {
  keyframes,
  Flex,
  Center,
  Text,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";

interface Props {
  reverse?: boolean;
  image: string;
  title: string;
  text: string;
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const InfoSection: React.FC<Props> = ({
  text,
  title,
  image,
  reverse,
}) => {
  return (
    <Flex
      flexDir={{ md: reverse ? "row-reverse" : "unset", base: "column" }}
      h={"70vh"}
      //minH={{ md: "100vh", base: "50vh" }}
    >
      <Center h={"100%"} flex={1}>
        <Box w={{ md: "500px", base: "90%" }}>
          <Heading mb={5} fontFamily={"AvBold"} fontWeight={"bold"}>
            {title}
          </Heading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Box>
      </Center>
      <Center h={"100%"} flex={1}>
        <Image
          animation={`${spin} infinite 60s linear`}
          borderRadius={15}
          w={{ md: "300px", base: "200px" }}
          src={image}
        />
      </Center>
    </Flex>
  );
};
