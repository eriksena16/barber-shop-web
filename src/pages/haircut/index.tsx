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
          background={"barber.100"}
          height={"100vh"}
          align={"center"}
          justifyContent={"center"}
        >
          <Text color={"button.cta"} fontSize={30}> Cortes</Text>
        </Flex>
      </SideBar>
    </>
  );
}
