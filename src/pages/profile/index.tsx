import Head from "next/head";
import { Input, Flex, Heading, Box, Text, Button } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";
import Link from "next/link";


export default function Profile() {
  return (
    <>
      <Head>
        <title> BarberShop - Perfil</title>
      </Head>
      <SideBar>
        <Flex
          background={"barber.100"}
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Flex
            w="100%"
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Heading
              fontSize="4xl"
              fontFamily="inherit"
              marginTop={4}
              marginRight={4}
              marginBottom={4}
              color={"barber.400"}
            >
              Minha Conta
            </Heading>
          </Flex>

          <Flex
            maxWidth="700px"
            background="barber.50"
            width="100%"
            direction="column"
            alignItems="center"
            justifyContent="center"
            borderRadius={10}
          >
            <Flex
              paddingTop={8}
              paddingBottom={8}
              direction="column"
              width="85%"
            >
              <Text
                marginBottom={2}
                fontSize="2xl"
                fontWeight="bold"
                fontFamily="inherit"
                color="barber.100"
              >
                NOME DA BARBEARIA:
              </Text>
              <Input
                width="100%"
                background="barber.100"
                placeholder="Nome da sua companhia"
                size="lg"
                type="Text"
              />

              <Text
                paddingTop={4}
                marginBottom={2}
                fontSize="2xl"
                fontWeight="bold"
                fontFamily="inherit"
                color="barber.100"
              >
                ENDEREÇO:
              </Text>
              <Input
                width="100%"
                background="barber.100"
                placeholder="Endereço da barbearia"
                size="lg"
                type="Text"
              />

              <Text
                paddingTop={4}
                marginBottom={2}
                fontSize="2xl"
                fontWeight="medium"
                fontFamily="inherit"
                color="barber.100"
              >
                PLANO ATUAL:
              </Text>

              <Flex
                padding={2}
                width="100%"
                border="4px"
                rounded={10}
                borderColor="barber.900"
                backgroundColor="barber.900"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text color="green.300" fontSize="2x1" fontWeight="extrabold">
                  Plano Gratis
                </Text>

                <Link href="/planos">
                  <Box
                    color="barber.100"
                    fontSize="2x1"
                    padding={1.5}
                    rounded={7}
                    fontWeight="bold"
                    backgroundColor="green.700"
                  >
                    Mudar de plano
                  </Box>
                </Link>
              </Flex>

              <Button backgroundColor="button.default"  _hover={{ bg : "green.700"}} marginTop={3} width= "100%" padding={6} textColor="barber.900" > Salvar </Button>

              <Button backgroundColor="gray.400" _hover={{ bg :"gray.400"}} borderWidth={2} borderColor="barber.400" marginTop={3} width= "100%" textColor="barber.900">  Sair da Conta</Button>
            </Flex>
          </Flex>
        </Flex>
      </SideBar>
    </>
  );
}
