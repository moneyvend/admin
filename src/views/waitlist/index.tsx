import {
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    HStack,
    Spinner,
    Text,
    Box,
  } from "@chakra-ui/react";
  import React from "react";
  import { useQuery } from "react-query";
  import UsersData from "../../data/users";
  import moment from "moment";
  
  const Users = () => {
    const { data, isLoading, isError, error } = useQuery(`Waitlist`, () =>
      UsersData.getWaitlist()
    );
    return (
      <Box p="16">
        {isLoading ? (
          <HStack justifyContent="center">
            <Spinner />
            <Text>Loading...</Text>
          </HStack>
        ) : null}
        {isError ? (
          <HStack justifyContent="center">
            <Text color="red.400">{`${error}`}</Text>
          </HStack>
        ) : null}
        {data?.length === 0 ? (
          <HStack justifyContent="center">
            <Text>No Users Found!!</Text>
          </HStack>
        ) : null}
  
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone Number</Th>
                <Th>Created At</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((user: any) => {
                return (
                  <Tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.fullname}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.phone}</Td>
                    <Td>{moment(user.createdAt).format("DD/MMM/YYYY h:mm a")}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default Users;
  