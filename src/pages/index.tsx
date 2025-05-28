import { Input, Flex, Text, Image, Box, Card, Link, Stack } from "@chakra-ui/react";
import Head from "next/head";
import TopNavBar from "../components/sidebarhome";

export default function Home() {
  return (
    <>
      <Head>
        <title>BarberShop - Seu sistema de agendamento</title>
      </Head>

      <Box minH="100vh" bg="barber.100">
        <TopNavBar />

        <Flex
          position="inherit"
          pt="100"
          background={"barber.100"}
          align="flex-start"
        >
          <Flex height={"100%"} width={"100%"} justifyContent="space-between">
            <Text fontSize="3xl" fontWeight="bold" pl="3">
              LOREN IPSOUN
              <Text
                fontSize="25px"
                fontStyle="italic"
                fontWeight="light"
                pl="3"
                pr="10"
                textAlign="justify"
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Text>
            </Text>

            <Image
              paddingRight="2"
              width="30%"
              rounded="md"
              src="https://www.daquibh.com.br/wp-content/uploads/sites/34/2017/08/Fonte_Pixabay.jpg"
              alt="Dan Abramov"
            />
          </Flex>
        </Flex>
        <Flex>
          <Image
            mt="10"
            ml="2"
            src="https://www.estadao.com.br/recomenda/wp-content/uploads/2023/04/0MHD9jwMiJoB8a78qxKMFS69bKkO93-metaYWd1c3Rpbi1mZXJuYW5kZXotbTIxWXlucktkc3ctdW5zcGxhc2guanBn-.jpg"
            boxSize="25%"
            borderRadius="full"
            fit="cover"
            alt="Naruto Uzumaki"
          />

          <Text fontSize="3xl" fontWeight="bold" pl="3">
            LOREN IPSOUN
            <Text
              fontSize="25px"
              fontStyle="italic"
              fontWeight="light"
              pl="3"
              pr="10"
              textAlign="justify"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Text>
        </Flex>

        <Flex justifyContent="center">
          <Card mt="10" maxW="sm" overflow="hidden" ml="5" mr="5">
            <Image
              src="https://unhasdecoradas2025.com.br/wp-content/uploads/2024/07/corte-de-cabelo-masculino-2025-imagem-barbeiro-dicas-diarias.jpg"
              alt="Green double couch with wooden legs"
            />
            <Card gap="2">
              <Card>Loren Ipsoun</Card>
              <Card>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Card>
            </Card>
          </Card>
          <Card mt="10" maxW="sm" overflow="hidden" ml="5" mr="5">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMzYyqWudqMImXXuEP5DOQQfIqTW38BdMaA&s "
              alt="Green double couch with wooden legs"
            />
            <Card gap="2">
              <Card>Loren Ipsoun</Card>
              <Card>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Card>
            </Card>
          </Card>
          <Card mt="10" maxW="sm" overflow="hidden" ml="5" mr="5">
            <Image
              src="https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/2/2018/12/07152930/taper-fade-cabelo-liso-preto.jpg"
              alt="Green double couch with wooden legs"
            />
            <Card gap="2">
              <Card>Loren Ipsoun</Card>
              <Card>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Card>
            </Card>
          </Card>
        </Flex>

        <Box bg="barber.800" color="barber.100" py={6} px={4} mt={10}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            maxW="1200px"
            mx="auto"
          >
            <Text fontSize="sm" mb={{ base: 2, md: 0 }}>
              © {new Date().getFullYear()} BarberShop. Todos os direitos
              reservados.
            </Text>

            <Stack direction="row" spacing={4}>
              <Link
                href="/sobre"
                fontSize="sm"
                _hover={{ color: "barber.500" }}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                fontSize="sm"
                _hover={{ color: "barber.500" }}
              >
                Contato
              </Link>
              <Link
                href="/termos"
                fontSize="sm"
                _hover={{ color: "barber.500" }}
              >
                Termos de Uso
              </Link>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
