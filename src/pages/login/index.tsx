import Image from "next/image";
import { Input, Flex, Text, Center } from '@chakra-ui/react'
import Head from "next/head";
import logoImg from "../../../public/images/logo.png"


export default function Login() {
  return (
    <>
      <Head>
        <title>BarberShop - Faca login para acessar</title>
      </Head>
      <Flex background={"barber.900"} height={"100vh"} align={"center"} justifyContent={"center"}>
        <Flex width={640} direction={"column"} p={14} rounded={8}>
          <Center p={4}>
            <Image
              src={logoImg}
              quality={100}
              objectFit="fill"
              alt="Logo BaberShop"
            />
          </Center>

          <Input background={"barber.100"}
            variant={"filled"}
            size={"lg"}
            placeholder="email@email.com"
            type="email"
            mb={3}
            _placeholder={{ color: 'button.cta' }}
          />


          <Input background={"barber.100"}
            variant={"filled"}
            size={"lg"}
            placeholder="*********"
            type="text"
            mb={6}
            _placeholder={{ color: 'barber.50' }}
          />

        </Flex>
      </Flex>
    </>
  );
}
