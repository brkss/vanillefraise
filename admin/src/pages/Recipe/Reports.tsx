import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { AiOutlineUserDelete } from 'react-icons/ai';

export const RecipeReports: React.FC = () => {
  return (
   <Box p={10} minH={"100vh"}>
      <Heading mb={7}>Users</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th isNumeric>Reports Count</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
              <Tr bg={false ? "#fff8f0" : "transparent"}>
                <Td fontWeight={"bold"}>test id</Td>
                <Td>Bacon</Td>
                <Td isNumeric>19</Td>
                <Td isNumeric>
                  <Button onClick={() => {}} size={"sm"}>
                    <AiOutlineUserDelete />
                  </Button>
                </Td>
              </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box> 
  );
};
