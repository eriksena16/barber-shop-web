import{useState, ChangeEvent} from "react"
import Head from "next/head";
import { SideBar } from "@/components/sidebar";
import {canSSRAuth} from "../../../utils/CanSSRAuth"

import { Flex, Heading, Text, Button, Input, Select} from "@chakra-ui/react";
import { setupAPIClient } from "@/services/api";
import { GET_HAIRCUT, POST_SERVICE } from "@/routes/routes";
import { HaircutItemProps } from "../../../types/HairCutTypes";
import {useRouter} from "next/router"

interface NewProps{
  haircuts : HaircutItemProps[];
}

export default function Newscheduling({ haircuts }: NewProps) {
  const [costumer, setCostumer] = useState("");
  const [selectedHaircut, setSelectedHaircut] = useState(haircuts[0]);
  const router = useRouter();

  function handleChangeSelect(id: string){
    const haircutItem = haircuts.find(item => item.id === id);
    
    setSelectedHaircut(haircutItem);
  }

  async function handleRegister() {
    try{
    const apiClient = setupAPIClient();
    await apiClient.post(POST_SERVICE, {
      customer: costumer,
      haircutId: selectedHaircut?.id,
      userId: selectedHaircut?.userId,
    });

    router.push("/dashboard")

    }catch(err){
      console.log(err);
      alert("Erro ao Registrar");
    }
  }

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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCostumer(e.target.value)
              }
            ></Input>

            <Select
              marginBottom={3}
              size="lg"
              width="85%"
              fontWeight="bold"
              textColor="barber.700"
              background="barber.100"
              onChange={(e) => handleChangeSelect(e.target.value)}
            >
              {haircuts?.map((item) => (
                <option color="white" key={item?.id} value={item?.id}>
                  {item?.name}
                </option>
              ))}
            </Select>

            <Button
              width="85%"
              size="lg"
              color="barber.100"
              bg="button.default"
              _hover={{ bg: "#F2C94C" }}
              onClick={handleRegister}
            >
              Cadastrar
            </Button>
          </Flex>
        </Flex>
      </SideBar>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) =>{

  try{
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get(GET_HAIRCUT,{
      params:{
        status : true, 
      }
    })

    if(response.data == null){
      return{
        redirect: {
          destination: "/dashboard",
          permanent: false
        }
      }  
    }

    console.log(response.data)

    return {
      props: {
        haircuts: response.data.data
      },
    };

  }catch(err){
    console.log(err)
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    }; 
  }

} )