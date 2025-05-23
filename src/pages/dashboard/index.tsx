import {
  Button,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import { SideBar } from "@/components/sidebar";
import { canSSRAuth } from "@/utils/CanSSRAuth";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";

export default function Dashboard() {
  const [isMobile] = useMediaQuery("(max-width: 500px)")
  return (
    <>
      <Head>
        <title>BarberShop - Dashboard</title>
      </Head>
      <SideBar>
        <Flex
          background={"barber.100"}
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Flex w="100%" direction="row" align="center" justify="flex-start">
            <Heading
              fontSize="4xl"
              marginTop={4}
              marginBottom={4}
              marginRight={4}
              color="barber.800"
            >
              Agenda
            </Heading>

            <Link href="dashboard/newscheduling">
              <Button
                backgroundColor="barber.800"
                color="barber.100"
                _hover={{ backgroundColor: "barber.900" }}
              >
                Registrar
              </Button>
            </Link>
          </Flex>

          <ChakraLink
            width="100%"
            margin="0"
            padding={0}
            marginTop={1}
            background="transparent"
            style={{ textDecoration: "none" }}
          >
            <Flex
              w="100%"
              direction={isMobile ? "column" : "row"}
              padding={4}
              rounded={4}
              marginBottom={4}
              background="barber.800"
              justify="space-between"
              align={isMobile ? "flex-start" : "center"}
            >
              <Flex direction="row" align="center">
                <IoMdPerson size={28} color="#F2C94C" />
                <Text fontWeight="bold" textColor="barber.100" marginLeft={4}>
                  Matheus Fraga
                </Text>
              </Flex>

              <Text fontWeight="bold" marginLeft={4} color="barber.100">
                Corte Completo
              </Text>

              <Text
                fontWeight="bold"
                color="barber.100"
                marginTop={isMobile ? 2 : 0}
              >
                R$ 59,90
              </Text>
            </Flex>
          </ChakraLink>
        </Flex>
      </SideBar>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
