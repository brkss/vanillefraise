import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { IChoice } from "../../utils/types";

const choices: IChoice[] = [
  {
    uid: "1",
    name: "Choice 1",
  },
  {
    uid: "2",
    name: "Choice 2",
  },
  {
    uid: "3",
    name: "Choice 3",
  },
];

export const Choices: React.FC = () => {
  const [selected, setSelected] = React.useState(choices[0].uid);

  return (
    <Box w={"300px"} mt={"10px"}>
      {choices.map((choice) => (
        <Center
          onClick={() => setSelected(choice.uid)}
          cursor={"pointer"}
          bg={choice.uid == selected ? "#c8a8b5" : "#dabdc9"}
          mb={"10px"}
          fontWeight={"bold"}
          rounded={7}
          h={"50px"}
          w={"100%"}
        >
          {choice.name}
        </Center>
      ))}
    </Box>
  );
};
