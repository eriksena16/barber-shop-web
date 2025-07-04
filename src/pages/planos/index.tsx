import Head from "next/head"
import {Button, Flex, Heading, Text, useMediaQuery} from  "@chakra-ui/react"
import {SideBar} from "../../components/sidebar"
import {canSSRAuth} from "../../utils/CanSSRAuth"
import { setupAPIClient } from "@/services/api"
import { GET_USER } from "@/routes/routes"

interface PlanosProps{
    premium : boolean;
}


export default function Planos({premium}: PlanosProps){
    const [isMobile] = useMediaQuery("(max-width: 500px)");
    return(
        <>
            <Heading>
                <title>BarberPro - Sua Assinatura Premium</title>
            </Heading>
            <SideBar>
                <Flex w="100%" direction="column" align="flex-start" justify="flex-start">
                     <Heading fontSize="3xl" mt={4} mb={4} mr={4} color="barber.800">
                        Planos
                     </Heading>
                </Flex>
                <Flex pb={8} maxW="780px" w="100%" direction="column" align="flex-start"justifyContent="flex-start">

                    <Flex gap={4} w="100%" flexDirection={isMobile ? "column" : "row"}>
                       
                        <Flex rounded={4} p={2} flex={1} background="barber.800" flexDirection="column">
                            <Heading
                            textAlign="center"
                            fontSize="2xl"
                            mt={2}
                            mb={4}
                            color="barber.100">
                                Plano Grátis
                            </Heading>

                            <Text fontWeight="medium" ml={4} mb={2} color="white"> Registrar Cortes</Text>
                            <Text fontWeight="medium" ml={4} mb={2} color="white"> Criar apenas 3 modelos de cortes</Text>
                            <Text fontWeight="medium" ml={4} mb={2} color="white"> Editar dados do Perfil </Text>
                        </Flex>     
                    </Flex>

                    <Flex gap={4} w="100%" flexDirection={isMobile ? "column" : "row"}>
                        <Flex rounded={4} p={2} flex={1} background="barber.800" flexDirection="column">
                            <Heading
                            textAlign="center"
                            fontSize="2xl"
                            mt={2}
                            mb={4}
                            color="barber.500">
                                Premium
                            </Heading>

                            <Text fontWeight="medium" ml={4} mb={2} color="white" > Registrar Cortes ilimitados</Text>
                            <Text fontWeight="medium" ml={4} mb={2}color="white" > Criar apenas modelos ilimitados</Text>
                            <Text fontWeight="medium" ml={4} mb={2} color="white"> Editar modelos de corte </Text>
                            <Text fontWeight="medium" ml={4} mb={2} color="white"> Editar dados do Perfil </Text>
                            <Text fontWeight="medium" ml={4} mb={2} color="white"> Receber todas as atualizações </Text>
                            <Text fontWeight="bold" ml={4} mb={2} color="barber.500" fontSize="2xl"> R$9.99 </Text>

                            <Button 
                            bg={premium? "transparent" :"barber.600"}
                            textColor="white"
                            m={2}
                            onClick={() => {}}
                            disabled={premium}
                            _hover={{bg : "#F2C94C"}}>
                            {premium ?(
                                "VOCÊ JÁ É PREMIUM "
                            ) : (
                                "VIRAR PREMIUM"
                            ) }
                            </Button>

                            {premium && (
                                <Button
                                m={2}
                                bg="white"
                                color="barber.700"
                                fontWeight="bold"
                                onClick={() => {}}>
                                    ALTERAR ASSINATURA
                                </Button>
                            )}

                        </Flex>     
                    </Flex>
                </Flex>
            </SideBar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  try {
    const apiclient = setupAPIClient(ctx);
    const response = await apiclient.get(GET_USER);
    console.log(response.data.data);
    return {
      props: {
        premium: response.data?.data?.subscriptions?.status === true ? true : false
      },
    };

  } catch (err) {
    console.error(err);
    return {
        redirect: {
            destination: '/dashboard',
            permanent: false,
        },
    };

  }
});