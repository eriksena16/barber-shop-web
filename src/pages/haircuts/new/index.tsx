import Head from "next/head";
import { useMediaQuery, Flex, Button, Input, Heading, Text } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";
import Link from "next/link"
import { FiChevronLeft } from "react-icons/fi";
import { canSSRAuth } from "@/utils/CanSSRAuth";
import { Check, Count, CreateHaircut } from "@/services/HairCutService";
import { ValidationNewHaircutProps, NewHaircutProps, } from "@/types/HairCutTypes"
import { useState } from "react";
import Router from 'next/router';

export default function NewHaircut({ subscription, count }: ValidationNewHaircutProps) {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [name, setName] = useState('');
  const [price, priceName] = useState('');

  async function handleRegister() {
    if (name === '' || price === '') {
      alert('Preencha todos os campos!');
      return;
    }

    try {

      await CreateHaircut({ name: name, price: Number(price) });
      Router.push('/haircuts')

    } catch (err) {
      console.log(err);
      alert("Erro ao cadastrar esse modelo.");
    }
  }

  return (
    <>
      <Head>
        <title>BarberShop - Novo modelo de Corte</title>
      </Head>
      <SideBar>
        <Flex
          direction={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Flex
            direction={isMobile ? "column" : "row"}
            w={"100%"}
            align={isMobile ? "flex-start" : "center"}
            mb={isMobile ? 4 : 0}
          >
            <Link href={"/haircuts"}>
              <Button
                background={"button.cta"}
                color={"barber.800"}
                p={4}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                _hover={{ bg: "barber.800", color: "barber.100" }}
                mr={4}
              >
                <FiChevronLeft size={24} color={"barber.100"} />
                Voltar
              </Button>
            </Link>
            <Heading
              fontSize={isMobile ? "28px" : "3xl"}
              mt={4}
              mb={4}
              mr={4}
              color={"barber.800"}
            >
              Modelos de Corte
            </Heading>
          </Flex>
          <Flex
            maxW={"700px"}
            bg={"barber.800"}
            rounded={5}
            w={"100%"}
            alignItems={"center"}
            justify={"center"}
            pt={8}
            pb={8}
            direction={"column"}
            borderRadius={10}
          >
            <Heading
              fontSize={isMobile ? "22px" : "3xl"}
              mb={4}
              color={"barber.100"}
            >
              Modelos de Corte
            </Heading>

            <Input
              placeholder="Nome do Corte"
              _placeholder={{ color: "barber.50" }}
              size={"lg"}
              type="text"
              w={"85%"}
              bg="barber.300"
              mb={4}
              value={name}
              fontFamily="mono"
              fontWeight="bold"
              textColor="barber.600"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Valor do corte ex: 59.90"
            _placeholder={{ color: "barber.50" }}
              size={"lg"}
              type="text"
              w={"85%"}
              mb={4}
              bg="barber.300"
              fontFamily="mono"
              fontWeight="bold"
              textColor="barber.600"
              value={price}
              onChange={(e) => priceName(e.target.value)}
            />
            <Button
              onClick={handleRegister}
              background={"button.default"}
              color={"barber.100"}
              w={"85%"}
              size={"lg"}
              alignItems={"center"}
              justifyContent={"center"}
              _hover={{ bg: "barber.900" }}
              mb={6}
              disabled={!subscription && count >= 3}
            >
              Cadastrar
            </Button>
            {!subscription && count >= 3 && (
              <Flex direction={"row"} align={"center"} justifyContent={"center"}>
                <Text>Voce atingiu seu limite de corte.</Text>
                <Link href={"/planos"}>
                  <Text fontWeight={"bold"} color={"#31FB6A"} cursor={"pointer"} ml={1}>
                    Seja premium
                  </Text>
                </Link>
              </Flex>
            )}

          </Flex>
        </Flex>
      </SideBar>
    </>
  );
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
  try {
    const response = await Check(ctx);
    const count = await Count(ctx);

    return {
      props: {
        subscription: response[0]?.status ?? false,
        count: count ?? 0
      }
    }
  } catch (err) {
    console.error("Erro ao verificar a assinatura:", err);
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

})