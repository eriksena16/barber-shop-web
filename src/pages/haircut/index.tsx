import Head from "next/head";
import { Input, Flex, Button, Center, Text } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";

export default function Haircut() {
  return (
    <>
      <Head>
        <title> BarberShop - Cortes</title>
      </Head>
      <SideBar>
        <Flex
          background={"barber.900"}
          height={"100vh"}
          align={"center"}
          justifyContent={"center"}
          backgroundColor={"barber.100"}
        >
          <Text> Cortes</Text>
        </Flex>
      </SideBar>
    </>
  );
}
