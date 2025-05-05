import { Flex, Text } from '@chakra-ui/react'
import Head from "next/head";
import { SideBar } from '@/components/sidebar';

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>BarberShop - Dashboard</title>
            </Head>
            <SideBar>
                <Flex background={"barber.900"} height={"100vh"} align={"center"} justifyContent={"center"}>
                    <Text color={"button.cta"} fontSize={30}>Dashboard</Text>
                </Flex>
            </SideBar>

        </>
    );
}
