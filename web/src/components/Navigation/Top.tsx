import React from "react";
import { Box, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { useLogoutMutation } from "../../generated/graphql";
import { useHistory } from "react-router-dom";
import { setAccessToken } from "../../utils/token/token";

export const TopNavigation: React.FC = () => {
  const history = useHistory();
  const [logout] = useLogoutMutation();

  const handleLogout = () => {
    logout().then((res) => {
      if (res && res.data!.logout.status) {
        setAccessToken("");
        history.push("/login");
      }
    });
  };

  return (
    <Box p={"5px 10px"} bg={"gray.50"}>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={6}>
          <Text fontWeight={"bold"}>Maffin</Text>
        </GridItem>
        <GridItem colSpan={6} textAlign={"right"}>
          <Button onClick={() => handleLogout()} size={"sm"}>
            Logout
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};
