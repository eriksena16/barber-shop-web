import Head from "next/head";
import { useMediaQuery, Flex, Button, Switch, Stack, Heading, Text } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";
import Link from "next/link"
import { IoMdPricetag } from "react-icons/io";
import { canSSRAuth } from "@/utils/CanSSRAuth";


export default function Haircuts() {
  const [isMobile] = useMediaQuery("(max-width: 500px)")
  return (
    <>
      <Head>
        <title> Modelos de Cortes - BarberShop</title>
      </Head>
      <SideBar>
        <Flex
          direction={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Flex
            direction={isMobile ? "column" : "row"}
            w={"100%"}
            alignItems={isMobile ? "flex-start" : "center"}
            justifyContent={"flex-start"}
            mb={0}
          >
            <Heading
              fontSize={isMobile ? "28px" : "3xl"}
              mt={4}
              mb={4}
              mr={4}
              color={"barber.50"}
            >
              Modelos de Cortes
            </Heading>

            <Link href={"/haircuts/new"}>
              <Button
                background={"button.cta"}
                color={"barber.100"}
                size={"lg"}
                _hover={{ bg: "#4E342E" }}>
                Cadastrar novo
              </Button>
            </Link>

            <Stack ml={"auto"} align={"center"} direction={"row"}>

              <Text
                fontWeight={"bold"}
                textColor={"barber.50"}
              >
                ATIVOS
              </Text>

              <Switch
                colorScheme="green"
                size={"lg"}
              />
            </Stack>
          </Flex>
        </Flex>

        <Link href={"/haircuts/123"}>
          <Flex
            cursor={"pointer"}
            w={"100%"}
            p={4}
            bg={"barber.900"}
            direction={isMobile ? "column" : "row"}
            alignItems={isMobile ? "flex-start" : "center"}
            rounded={"4"}
            mb={2}
            justifyContent={"space-between"}
          >
            <Flex mb={isMobile ? 2 : 0} direction={"row"} alignItems={"center"} justifyContent={"center"}>
              <IoMdPricetag size={28} color="#556B2F" />
              <Text fontWeight={"bold"} ml={4} noOfLines={2} color={"barber.100"}>Corte Completo</Text>
            </Flex>
            <Flex>
              <Text fontWeight={"bold"} color={"barber.100"}>Price: R$ 59.90</Text>
            </Flex>
          </Flex>
        </Link>

        <Link href={"/haircuts/123"}>
          <Flex
            cursor={"pointer"}
            w={"100%"}
            p={4}
            bg={"barber.900"}
            direction={isMobile ? "column" : "row"}
            alignItems={isMobile ? "flex-start" : "center"}
            rounded={"4"}
            mb={2}
            justifyContent={"space-between"}
          >
            <Flex direction={"row"} alignItems={"center"} justifyContent={"center"}>
              <IoMdPricetag size={28} color="#556B2F" />
              <Text fontWeight={"bold"} ml={4} noOfLines={2} color={"barber.100"}>Barba</Text>
            </Flex>
            <Flex>
              <Text fontWeight={"bold"} color={"barber.100"}>Price: R$ 59.90</Text>
            </Flex>
          </Flex>
        </Link>
      </SideBar>
    </>
  );
}

// export const getServerSideProps = canSSRAuth(async (ctx) => {
//   try {

//   } catch (err) {
//     return {
//       redirect: {
//         destination: '/dashboard',
//         permanent: false,
//       }
//     }
//   }
// });

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});