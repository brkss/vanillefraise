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
  Button,
} from "@chakra-ui/react";
import { Loading } from "../../components";
import {
  AdminGetUsersDocument,
  AdminGetUsersQuery,
  useAdminGetUsersQuery,
  useDeleteUserMutation,
} from "../../generated/graphql";
import Moment from "moment";
import { AiOutlineUserDelete } from "react-icons/ai";

export const UsersList: React.FC = () => {
  const { loading, data, error } = useAdminGetUsersQuery();
  const [del] = useDeleteUserMutation();
  if (loading || error) {
    return <Loading />;
  }

  const handleDelete = (uid: string) => {
    if (!uid) {
      return;
    }
    del({
      variables: {
        uid: uid,
      },
      update: (store, { data }) => {
        if (!data || !data.deleteUser.status) {
          return;
        }
        const users = store.readQuery<AdminGetUsersQuery>({
          query: AdminGetUsersDocument,
        })!.adminGetUsers;
        // find target user ;
        const index = users?.findIndex((x) => x.user.id === uid) || -1;
        if (index > -1) {
          users?.splice(index, 1);
        }
        store.writeQuery<AdminGetUsersQuery>({
          query: AdminGetUsersDocument,
          data: {
            adminGetUsers: [...users],
          },
        });
      },
    });
  };

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
                <Td isNumeric>
                  <Button onClick={() => handleDelete(d.user.id)} size={"sm"}>
                    <AiOutlineUserDelete />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
