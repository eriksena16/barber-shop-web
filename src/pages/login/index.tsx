import Image from "next/image";
import { Input, Flex, Button, Center, Text } from '@chakra-ui/react'
import Head from "next/head";
import logoImg from "../../../public/images/logo.png"
import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContex } from "@/context/AuthContext";

export default function Login() {
  const { signIn} = useContext(AuthContex)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    await signIn({
      email,
      password,
    })
  }

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
              width={340}
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
            mt={3}
            _placeholder={{ color: 'button.cta' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <Input background={"barber.100"}
            variant={"filled"}
            size={"lg"}
            placeholder="*********"
            type="text"
            mb={6}
            _placeholder={{ color: 'barber.50' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            background={"button.cta"}
            mb={6}
            color={"button.default"}
            size={"lg"}
            _hover={{ bg: "#4E342E" }}
            onClick={handleLogin}
          >
            Acessar
          </Button>

          <Center mt={2}>
            <Link href={"/register"}>
              <Text cursor={"pointer"} > Ainda nao tem conta? <strong>Cadastre-se</strong></Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
