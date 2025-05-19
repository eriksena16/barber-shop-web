import Image from "next/image";
import Head from "next/head";
import logoImg from "../../../public/images/logo.png";
import Link from "next/link";
import { Input, Flex, Button, Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { canSSRGuest } from "@/utils/CanSSRGuest";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const { signUp } = useAuth();

  async function handleRegister() {
    if (name === "" && email === "" && password === "" && address === "") {
      return;
    }
    await signUp({
      name,
      email,
      password,
      address,
    });
  }

  return (
    <>
      <Head>
        <title>BarberShop - Crie sua conta no BarberShop</title>
      </Head>
      <Flex
        background={"barber.800"}
        height={"100dvh"}
        align={"center"}
        justifyContent={"center"}
      >
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

          <Input
            background={"barber.300"}
            variant={"filled"}
            size={"lg"}
            placeholder="Nome"
            type="password"
            mb={3}
            mt={3}
            _placeholder={{}}
            fontFamily="mono"
            fontWeight="bold"
            textColor="barber.200"
            _focus={{ background: "barber.100" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            background={"barber.300"}
            variant={"filled"}
            size={"lg"}
            placeholder="E-mail"
            type="password"
            mb={3}
            _placeholder={{}}
            fontFamily="mono"
            fontWeight="bold"
            textColor="barber.200"
            _focus={{ background: "barber.100" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            background={"barber.300"}
            variant={"filled"}
            size={"lg"}
            placeholder="Endereço"
            type="password"
            mb={3}
            _placeholder={{}}
            fontFamily="mono"
            fontWeight="bold"
            textColor="barber.200"
            _focus={{ background: "barber.100" }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Input
            background={"barber.300"}
            variant={"filled"}
            size={"lg"}
            placeholder="*************"
            type="password"
            mb={3}
            _placeholder={{}}
            fontFamily="mono"
            fontWeight="bold"
            textColor="barber.200"
            _focus={{ background: "barber.100" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            background={"button.danger"}
            mb={6}
            color={"button.cta"}
            size={"lg"}
            _hover={{ bg: "#F2C94C", textColor: "#2C3E50" }}
            onClick={handleRegister}
          >
            Cadastrar
          </Button>

          <Center mt={2}>
            <Link href={"/login"}>
              <Text cursor={"pointer"} color={"barber.100"}>
                {" "}
                Já possui uma conta? <strong>Faca login</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
