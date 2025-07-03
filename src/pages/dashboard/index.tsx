import {useState} from 'react'

import {
  Button,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useMediaQuery,
  useDisclosure
} from "@chakra-ui/react";
import Head from "next/head";
import { SideBar } from "@/components/sidebar";
import { canSSRAuth } from "@/utils/CanSSRAuth";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { setupAPIClient } from "@/services/api";
import { FINISH_SCHEDULE, GET_SCHEDULE } from "@/routes/routes";
import { DashboardProps, ScheduleItem } from "@/types/DashboardProps";
import {ModalInfo} from "../../components/modal"


export default function Dashboard({schedule} : DashboardProps) {
  const[list, setList] = useState(schedule);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [service, setService] = useState<ScheduleItem>();
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  function handleOpenModal(item: ScheduleItem){
    setService(item); 
    onOpen();
  }

  async function handleFinish(id : string){
    try{
      const apiClient = setupAPIClient();
      await apiClient.post(FINISH_SCHEDULE, {id: id});

      const filterItem = list.filter(item => {
        return(item?.id != id)
      })
      
      setList(filterItem)
      onClose();

    }catch(err){
      console.log(err);
      onClose();
      alert("Erro ao finalizar este serviço");
    }
  }

  return (
    <>
      <Head>
        <title>BarberShop - Dashboard</title>
      </Head>
      <SideBar>
        <Flex
          background={"barber.100"}
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Flex w="100%" direction="row" align="center" justify="flex-start">
            <Heading
              fontSize="4xl"
              marginTop={4}
              marginBottom={4}
              marginRight={4}
              color="barber.800"
            >
              Agenda
            </Heading>

            <Link href="dashboard/newscheduling">
              <Button
                backgroundColor="barber.800"
                color="barber.100"
                _hover={{ backgroundColor: "barber.900" }}
              >
                Registrar
              </Button>
            </Link>
          </Flex>

          {list.map(item => (
            <ChakraLink
            onClick={() => handleOpenModal(item)}
              key={item?.id}
              width="100%"
              margin="0"
              padding={0}
              marginTop={1}
              background="transparent"
              style={{ textDecoration: "none" }}
            >
              <Flex
                w="100%"
                direction={isMobile ? "column" : "row"}
                padding={4}
                rounded={4}
                marginBottom={4}
                background="barber.800"
                justify="space-between"
                align={isMobile ? "flex-start" : "center"}
              >
                <Flex direction="row" align="center">
                  <IoMdPerson size={28} color="#F2C94C" />
                  <Text fontWeight="bold" textColor="barber.100" marginLeft={4}>
                    {item?.customer}
                  </Text>
                </Flex>

                <Text fontWeight="bold" marginLeft={4} color="barber.100">
                  {item?.haircut?.name}
                </Text>

                <Text
                  fontWeight="bold"
                  color="barber.100"
                  marginTop={isMobile ? 2 : 0}
                >
                  {"R$ " + Number(item?.price).toFixed(2)}
                </Text>
              </Flex>
            </ChakraLink>
          ))}
        </Flex>
      </SideBar>
      <ModalInfo isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      data={service}
      finishService={()=> handleFinish(service?.id)}></ModalInfo>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  try{
        const apiClient = setupAPIClient(ctx);
        const response = await apiClient.get(GET_SCHEDULE);
        return{
          props:{
            schedule: response.data.data
          }
        }
            
  }catch(err){
    console.log(err);
    return{
      props:{
        schedule: []
      }
    }
  }

});
