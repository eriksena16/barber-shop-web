import Head from "next/head";
import { Input, Flex, Button, Center, Text } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";

export default function Profile() {
  return (
    <>
      <Head>
        <title> BarberShop - Perfil</title>
      </Head>
      <SideBar>
        <Flex
          background={"barber.100"}
          height={"100vh"}
          align={"center"}
          justifyContent={"center"}
        >
          <Text color={"button.cta"} fontSize={30}> Perfil</Text>
        </Flex>
      </SideBar>
    </>
  );
}
