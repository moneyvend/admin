import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box position="relative">
      <Header />
      <Box display="flex" w="100%">
        <Sidebar />
        <Box w="88%">{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
