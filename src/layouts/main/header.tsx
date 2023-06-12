import {
  Text,
  Image,
  HStack,
  Icon,
  VStack,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex
} from "@chakra-ui/react";
import React from "react";
import { Images } from "../../utils/images";
import { Styles } from "../../utils/theme";
import { FaRegBell, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosAdd, IoIosLogOut } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";

const menuList = [
  {
    icon: IoIosAdd,
    title: "Request Service"
  },
  {
    icon: FaRegMoneyBillAlt,
    title: "Transactions"
  },
  {
    icon: BsQuestionCircle,
    title: "FAQ"
  },
  {
    icon: BiSupport,
    title: "Support"
  },
  {
    icon: IoIosLogOut,
    title: "Sign out"
  }
];

const Header = (): React.JSX.Element => {
  return (
    <Flex
      alignItems="center"
      px="8"
      py="4"
      justifyContent="space-between"
      borderBottom={Styles.border}>
      <Image src={Images.LOGO_ICON} alt="Credify"  w="16"/>
      <HStack spacing="16">
        <Icon as={FaRegBell} w={21} h={21} />
        <Menu>
          <MenuButton>
            <HStack spacing="2" align="flex-start">
              <Avatar src={Images.PROFILE} borderRadius="full" boxSize="40px" />
              <VStack alignItems="flex-start" spacing="0">
                <Text fontSize="sm" fontWeight="bold">
                  Isaac Pitwa
                </Text>
                <Text fontSize="xs" color="gray.500">
                  isaac@monievend.com
                </Text>
              </VStack>
              <Icon as={IoIosArrowDown} w={21} h={21} color="gray.500" />
            </HStack>
          </MenuButton>
          <MenuList>
            {menuList.map((item, index) => (
              <MenuItem key={index} icon={<Icon as={item.icon} w={21} h={21} />}>
                <Text fontSize="sm">{item.title}</Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Header;
