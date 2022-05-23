import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  //Tfoot,
  Tr,
  Th,
  Td,
  //TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Loading } from "../../components";
import { useAdminGetUsersQuery } from "../../generated/graphql";
import Moment from "moment";
export const UsersList: React.FC = () => {
  const { loading, data, error } = useAdminGetUsersQuery();
  if (loading || error) {
    return <Loading />;
  }

  return (
    <Box p={10} minH={"100vh"}>
      <Heading mb={7}>Users</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th isNumeric>Joined At</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.adminGetUsers.map((d, key) => (
              <Tr key={key}>
                <Td fontWeight={"bold"}>{d.user.name}</Td>
                <Td>{d.user.username}</Td>
                <Td>{d.user.email}</Td>
                <Td isNumeric fontWeight={"bold"}>
                  {Moment(d.user.created_at).format("DD-MM-YYYY hh:mm")}
                </Td>
                <Td isNumeric>EDIT | DELETE</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
