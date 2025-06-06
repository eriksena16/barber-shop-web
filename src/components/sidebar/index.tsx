import { Children, ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  useColorModeValue,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiScissors, FiClipboard, FiSettings, FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import Link from "next/link";
import {
  LinkItemProps,
  SideBarProps,
  NavItemProps,
  MobileProps,
} from "@/types/SideBarTypes";


const LinkItems: Array<LinkItemProps> = [
  { name: "Agenda", icon: FiClipboard, route: "/dashboard" },
  { name: "Cortes", icon: FiScissors, route: "/haircuts" },
  { name: "Minha Conta", icon: FiSettings, route: "/profile" },
];

export function SideBar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH={"100vh"} bg={"barber.100"}>
      <SideBarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size={"full"}
        onClose={onClose}
      >
        <DrawerContent>
          <SideBarContent onClose={() => onClose()} />
        </DrawerContent>
      </Drawer>
      <MobileView display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={4}>
        {children}
      </Box>
    </Box>
  );
}

const SideBarContent = ({ onClose, ...rest }: SideBarProps) => {
  return (
    <Box
      bg={"barber.800"}
      borderRight={"1px"}
      borderRightColor={useColorModeValue("barber.500", "barber.500")}
      w={{ base: "full", md: 60 }}
      pos={"fixed"}
      h={"full"}
      {...rest}
    >
      <Flex
        h={"20"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={"8"}
      >
        <Link href={"/dashboard"}>
          <Flex cursor={"pointer"} userSelect={"none"} flexDirection={"row"}>
            <Text
              fontSize={"2xl"}
              fontFamily={"monospace"}
              fontWeight={"bold"}
              color={"barber.100"}
            >
              Baber
            </Text>
            <Text
              fontSize={"2xl"}
              fontFamily={"monospace"}
              fontWeight={"bold"}
              color={"barber.900"}
            >
              Shop
            </Text>
          </Flex>
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      {LinkItems.map((link) => (
        <NavItem icon={link.icon} route={link.route} key={link.name}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, route, ...rest }: NavItemProps) => {
  return (
    <Link href={route} style={{ textDecoration: "none" }}>
      <Flex
        align={"center"}
        p={"4"}
        mx={"4"}
        borderRadius={"lg"}
        role="group"
        cursor={"pointer"}
        textColor={"button.cta"}
        _hover={{
          bg: "barber.600",
          color: "barber.500",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr={4}
            fontSize={"16"}
            as={icon}
            _groupHover={{
              color: "barber.500",
            }}
          />
        )}

        {children}
      </Flex>
    </Link>
  );
};

const MobileView = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("barber.800", "barber.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("barber.900", "barber.900")}
      justifyContent={"flex-start"}
      {...rest}
    >
      <IconButton
        variant={"outline"}
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Flex flexDirection={"row"}>
        <Text
          ml={8}
          fontSize={"2xl"}
          fontFamily={"monospace"}
          fontWeight={"bold"}
          color={"barber.100"}
        >
          Barber
        </Text>
        <Text
          fontSize={"2xl"}
          fontFamily={"monospace"}
          fontWeight={"bold"}
          color={"button.danger"}
        >
          Shop
        </Text>
      </Flex>
    </Flex>
  );
};
