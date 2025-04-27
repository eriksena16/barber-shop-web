import {Flex, Text } from '@chakra-ui/react'
import Head from "next/head";


export default function Dashboard() {
    return (
        <>
        <Head>
            <title>BarberShop - Dashboard</title>
        </Head>
        <Flex background={"barber.900"} height={"100vh"} align={"center"} justifyContent={"center"}>
            <Text color={"button.cta"} fontSize={30}>Dashboard</Text>
        </Flex>
        </>
    );
}
