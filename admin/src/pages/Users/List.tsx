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
import {
  AdminGetUsersDocument,
  AdminGetUsersQuery,
  useAdminGetUsersQuery,
  useBanUserMutation,
} from "../../generated/graphql";
import Moment from "moment";
import { AiOutlineUserDelete } from "react-icons/ai";
import { Loading } from '../../components';

export const UsersList: React.FC = () => {
  const { loading, data, error } = useAdminGetUsersQuery();
  const [ban] = useBanUserMutation();
  if (loading || error) {
    return <Loading />;
  }

  const handleDelete = (uid: string) => {
    if (!uid) {
      return;
    }
    ban({
      variables: {
        uid: uid,
      },
      update: (store, { data }) => {
        if (!data || !data.banUser.status) {
          return;
        }
        const users = store.readQuery<AdminGetUsersQuery>({
          query: AdminGetUsersDocument,
        })!.adminGetUsers;
        // find target user ;
        console.log("users => ", users);
        console.log("uid => ", uid);
        const index = users.findIndex((x) => x.user.id === uid);
        if (index > -1) {
          users[index].user.banned = !users[index].user.banned;
        }
        console.log("index : ", index);
        console.log("UPDATE THAT SHT !", index, users[index].user.banned);
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
              <Tr bg={d.user.banned ? "#fff8f0" : "transparent"} key={key}>
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
