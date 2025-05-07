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
          background={"barber.900"}
          height={"100vh"}
          align={"center"}
          justifyContent={"center"}
          backgroundColor={"barber.100"}
        >
          <Text> Perfil</Text>
        </Flex>
      </SideBar>
    </>
  );
}
