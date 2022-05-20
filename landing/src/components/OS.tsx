import React from "react";
import {
  Box,
  Text,
  useRadio,
  RadioProps,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";

const RadioCard: React.FC<RadioProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        color={"gray"}
        borderRadius="2px"
        _checked={{
          bg: "gray.200",
          color: "black",
          borderColor: "gray.200",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

interface Props {
  onSelect: (val: string) => void;
}

export const OS: React.FC<Props> = ({ onSelect }) => {
  const options = ["IOS", "Android"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "IOS",
    onChange: (value) => onSelect(value),
  });

  const group = getRootProps();

  return (
    <Box marginY={"20px"}>
      <Text fontWeight={"bold"} mb={"5px"}>
        What type of device you're using ?
      </Text>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    </Box>
  );
};
