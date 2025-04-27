import Image from "next/image";
import Head from "next/head";
import logoImg from "../../../public/images/logo.png"
import Link from "next/link";
import { Input, Flex, Button, Center, Text } from '@chakra-ui/react'
import { useState } from "react";

export default function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleRegister() {
    console.log(nome)
    console.log(email)
    console.log(password)
  }

  return (
    <>
      <Head>
        <title>BarberShop - Crie sua conta no BarberShop</title>
      </Head>
      <Flex background={"barber.900"} height={"100dvh"} align={"center"} justifyContent={"center"}>
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
            placeholder="Nome da barbearia"
            type="text"
            mb={3}
            mt={3}
            _placeholder={{ color: 'button.cta' }}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input background={"barber.100"}
            variant={"filled"}
            size={"lg"}
            placeholder="email@email.com"
            type="email"
            mb={3}
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
            onClick={handleRegister}
          >
            Cadastrar
          </Button>

          <Center mt={2}>
            <Link href={"/login"}>
              <Text cursor={"pointer"} > Já possui uma conta? <strong>Faca login</strong></Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
