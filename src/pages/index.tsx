import Image from "next/image";
import { Input, Flex, Text } from '@chakra-ui/react'
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>BarberShop - Seu sistema de agendamento</title>
      </Head>
      <Flex background={"barber.900"} height={"100vh"} align={"center"} justifyContent={"center"}>
        <Text fontSize={30}>Pagina Home</Text>
      </Flex>
    </>
  );
}
