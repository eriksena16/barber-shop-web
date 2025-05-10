import Head from "next/head";
import { useMediaQuery, Flex, Button, Input, Stack, Heading, Text } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";
import Link from "next/link"
import { FiChevronLeft } from "react-icons/fi";

export default function NewHaircut() {
  const [isMobile] = useMediaQuery("(max-width: 500px)")
  return (
    <>
      <Head>
        <title>BarberShop - Novo modelo de Corte</title>
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
            align={isMobile ? "flex-start" : "center"}
            mb={isMobile ? 4 : 0}
          >
            <Link href={"/haircuts"}>
              <Button
                background={"button.cta"}
                color={"barber.800"}
                p={4}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                _hover={{ bg: " #2C3E50", color: " #F5EEE2" }}
                mr={4}
              >
                <FiChevronLeft size={24} color={"barber.100"} />
                Voltar
              </Button>
            </Link>
            <Heading
              fontSize={isMobile ? "28px" : "3xl"}
              mt={4}
              mb={4}
              mr={4}
              color={"barber.800"}
            >
              Modelos de Corte
            </Heading>
          </Flex>
          <Flex
            maxW={"700px"}
            bg={"barber.800"}
            rounded={5}
            w={"100%"}
            alignItems={"center"}
            justify={"center"}
            pt={8}
            pb={8}
            direction={"column"}
          >
            <Heading
              fontSize={isMobile ? "22px" : "3xl"}
              mb={4}
              color={"barber.100"}
            >
              Modelos de Corte
            </Heading>

            <Input
              placeholder="Nome do Corte"
              size={"lg"}
              type="text"
              w={"85%"}
              bg="barber.600"
              mb={4}
            />
            <Input
              placeholder="Valor do corte ex: 59.90"
              size={"lg"}
              type="text"
              w={"85%"}
              mb={4}
              bg="barber.600"
            />
            <Button
              background={"button.default"}
              color={"barber.100"}
              w={"85%"}
              size={"lg"}
              alignItems={"center"}
              justifyContent={"center"}
              _hover={{ bg: " #B22222" }}
              mb={6}
            >
              Cadastrar
            </Button>
          </Flex>
        </Flex>
      </SideBar>
    </>
  );
}
