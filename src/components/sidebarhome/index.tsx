import {
  Box,
  Flex,
  Button,
  IconButton,
  Text,
  HStack,
  VStack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { FiScissors, FiAnchor, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { IconType } from "react-icons";

interface LinkItem {
  name: string;
  icon: IconType;
  route: string;
  variant?: "login" | "register";
}

const LinkItems: LinkItem[] = [
  { name: "entrar", icon: FiScissors, route: "/login", variant: "login" },
  {
    name: "REGISTRE-SE",
    icon: FiAnchor,
    route: "/register",
    variant: "register",
  },
];

export default function TopNavBar() {
  const { isOpen, onToggle } = useDisclosure();

  const NavLink = ({ name, icon: Icon, route, variant }: LinkItem) => {
    const isRegister = variant === "register";

    return (
      <Link href={route} style={{ textDecoration: "none" }}>
        <Button
          w="full"
          leftIcon={<Icon />}
          bg={isRegister ? "barber.900" : "transparent"}
          color="barber.100"
          fontWeight="bold"
          borderRadius="md"
          _hover={{
            bg: isRegister ? "barber.500" : "barber.600",
            color: isRegister ? "white" : "barber.500",
          }}
          ml={{ base: 0, md: 2 }}
        >
          {name}
        </Button>
      </Link>
    );
  };

  return (
    <Box
      bg="barber.800"
      px={4}
      boxShadow="md"
      position="fixed"
      top={0}
      width="100%"
      zIndex={100}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Text
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            color="barber.100"
          >
            Barber
          </Text>
          <Text
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            color="barber.900"
          >
            Shop
          </Text>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <FiX /> : <FiMenu />}
          variant="ghost"
          aria-label="Abrir menu"
          color="barber.100"
        />

        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          {LinkItems.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack
          bg="barber.800"
          px={4}
          pb={4}
          display={{ md: "none" }}
          spacing={2}
          borderBottomRadius="md"
        >
          {LinkItems.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
        </VStack>
      </Collapse>
    </Box>
  );
}
