import Head from "next/head";
import { Input, Flex, Heading, Box, Text, Button } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { canSSRAuth } from "@/utils/CanSSRAuth";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "@/context/AuthContext";
import { getUserData, updateUserData } from "../../services/AuthServices";
import { useState } from "react";
import { setupAPIClient } from "@/services/api";
import { updateProps, UserProps } from "@/types/AuthTypes";

type ProfileProps ={
  userData: UserProps;
}

export default function Profile({userData} : ProfileProps) {

  const [name, setName] = useState(userData && userData?.name);
  const [endereco, setEndereco] = useState(userData && userData?.address);
  async function logout() {
    signOut();
  }

  async function updateUser() 
  {
    if(name === '') return;

    try{
      const credentials: updateProps = {id:userData.id  ,name: name, address: endereco};
      await updateUserData(credentials);

    }catch(err){
      console.log(err)
    }
    
  }
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
            <FaUser size={50} color={" #2C3E50"}></FaUser>
            <Heading
              fontSize="4xl"
              fontFamily="inherit"
              marginLeft={4}
              marginTop={4}
              marginRight={4}
              marginBottom={4}
              color={"barber.800"}
            >
              Minha Conta
            </Heading>
          </Flex>

          <Flex
            maxWidth="700px"
            background="barber.800"
            border="4px"
            borderColor="barber.800"
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
                placeholder="Nome da sua companhia"
               _placeholder={{ color: "barber.50" }}
              size={"lg"}
              type="text"
              bg="barber.300"
              mb={4}
              value={name}
              fontFamily="mono"
              fontWeight="bold"
              textColor="barber.600"
              onChange={(e) => setName(e.target.value)}
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
                placeholder="Endereço da barbearia"
                   _placeholder={{ color: "barber.50" }}
              size={"lg"}
              type="text"
              bg="barber.300"
              mb={4}
              value={endereco}
              fontFamily="mono"
              fontWeight="bold"
              textColor="barber.600"
              onChange={(e) => setEndereco(e.target.value)}
              />

              <Text
                paddingTop={4}
                marginBottom={2}
                fontSize="2xl"
                fontFamily="inherit"
                fontWeight="bold"
                color="barber.100"
              >
                PLANO ATUAL:
              </Text>

              <Flex
                padding={2}
                width="100%"
                rounded={4}
                border="4px"
                borderColor="barber.600"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text color="barber.500" fontSize="2x1" p="1" rounded={2} backgroundColor= "barber.600" fontWeight="extrabold">
                  Plano{" "}
                  {userData?.subscriptions?.status ? "Premium" : "Grátis "}
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

              <Button
                backgroundColor="barber.600"
                _hover={{ bg: "barber.900" }}
                marginTop={3}
                width="100%"
                padding={6}
                textColor="barber.100"
                onClick={updateUser}
              >
                Salvar
              </Button>

              <Button
                backgroundColor="transparent"
                border="2px"
                _hover={{ bg: "gray.400" }}
                marginTop={3}
                width="100%"
                textColor="gray.200"
                onClick={logout}
              >
                Sair da Conta
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </SideBar>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) =>{
  try {
    const apiClient = setupAPIClient(ctx);
    const response = await getUserData(apiClient);

    return {
      props: {
        userData: response,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
});
