import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const ListItem: React.FC = () => {
  return (
    <Box mb={'10px'} bg={"gray.50"} p={"20px"} borderRadius={"13px"}>
      <Text>Avocado Bowl</Text>
      <Text>
        The secret to light, fluffy matzo balls is twofold: using seltzer
        instead of tap water and letting the mixture rest in the refrigerator so
        it's fully hydrated before cooking. In this easy soup recipe, the
        vegetables can be finely sliced to make an elegant soup or coarsely
        chopped or sliced for a more rustic presentation.
      </Text>
    </Box>
  );
};
