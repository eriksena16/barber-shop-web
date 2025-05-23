import{useState, ChangeEvent} from "react"
import Head from "next/head";
import { SideBar } from "@/components/sidebar";

import { Flex, Heading, Text, Button, Input, Select} from "@chakra-ui/react";

export default function Newscheduling() {

    const[costumer, setCostumer] = useState('')

  return (
    <>
      <Head>
        <title>Novo agendamento</title>
      </Head>
      <SideBar>
        <Flex direction="column" align="flex-start" justify="flex-start">
          <Flex
            direction="row"
            width="100%"
            align="center"
            justify="flex-start"
          >
            <Heading
              textColor="barber.800"
              fontSize="4xl"
              marginTop={4}
              marginBottom={4}
              marginRight={4}
            >
              Novo Agendamento
            </Heading>
          </Flex>

          <Flex
            maxWidth="700px"
            paddingTop={8}
            paddingBottom={8}
            width="100%"
            direction="column"
            align="center"
            justify="center"
            background="barber.800"
          >
            <Input
              placeholder="Nome do cliente"
              width="85%"
              marginBottom={4}
              size="lg"
              type="text"
              background="barber.100" 
              value={costumer}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCostumer(e.target.value)}
            ></Input>

            <Select
              marginBottom={3}
              size="lg"
              width="85%"
              fontWeight="bold"
              textColor="barber.700"
              background="barber.100"
            >
              <option color="white" key={1} value="barba completa">
                Barba Completa
              </option>
            </Select>

            <Button
              width="85%"
              size="lg"
              color="barber.100"
              bg="button.default"
              _hover={{ bg: "#F2C94C" }}
            >
              Cadastrar
            </Button>
          </Flex>
        </Flex>
      </SideBar>
    </>
  );
}
