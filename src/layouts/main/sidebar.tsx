import React from "react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import { AppRoutes } from "../../utils/routes";
import { Styles } from "../../utils/theme";
const Sidebar = (): React.JSX.Element => {
  const navItems = [
    {
      name: "Dashboard",
      icon: AiOutlineDashboard,
      path: AppRoutes.DASHBOARD
    },
    {
      name: "Newsletter",
      icon: FaRegMoneyBillAlt,
      path: AppRoutes.NEWSLETTER
    },
    {
      name: "Waitlist",
      icon: BiCog,
      path: AppRoutes.WAITLIST
    },
    {
      name: "Users",
      icon: FiUsers,
      path: AppRoutes.USERS
    }
  ];
  return (
    <Box w="12%" borderRight={Styles.border} h="100vh" py="4" minW="210">
      {navItems.map((item, index) => (
        <NavLink key={index} to={item.path}>
          <HStack px="8" py="4" spacing="6" alignItems="center">
            <Icon as={item.icon} w={8} h={8} color="primary" />
            <Text color="primary">{item.name}</Text>
          </HStack>
        </NavLink>
      ))}
    </Box>
  );
};

export default Sidebar;
