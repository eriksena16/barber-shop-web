import Head from "next/head";
import { useMediaQuery, Flex, Button, Switch, Stack, Heading, Text } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";
import Link from "next/link"
import { IoMdPricetag } from "react-icons/io";
import { canSSRAuth } from "@/utils/CanSSRAuth";
import { ListHaircut } from "@/services/HairCutService";
import { HaircutsProps, HaircutItemProps } from "@/types/HairCutTypes";
import { ChangeEvent, useState } from "react";

export default function Haircuts({ haircuts }: HaircutsProps) {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [haircutList, setHaircutList] = useState<HaircutItemProps[]>(haircuts || []);
  const [disableHairCut, setDisableHaircut] = useState("enabled");

  async function handleD(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === 'disabled') {
      setDisableHaircut("enabled")

      const response = await ListHaircut(true);
      setHaircutList(response);

    } else {
      setDisableHaircut("disabled")

       const response = await ListHaircut(false);
      setHaircutList(response);
    }
  }

  return (
    <>
      <Head>
        <title> Modelos de Cortes - BarberShop</title>
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
            alignItems={isMobile ? "flex-start" : "center"}
            justifyContent={"flex-start"}
            mb={0}
          >
            <Heading
              fontSize={isMobile ? "28px" : "3xl"}
              mt={4}
              mb={4}
              mr={4}
              color={"barber.800"}
            >
              Modelos de Cortes
            </Heading>

            <Link href={"/haircuts/new"}>
              <Button
                background={"barber.800"}
                color={"barber.100"}
                size={"lg"}
                _hover={{ bg: "#B22222" }}>
                Cadastrar novo
              </Button>
            </Link>

            <Stack ml={"auto"} align={"center"} direction={"row"}>

              <Text
                fontWeight={"bold"}
                textColor={"barber.800"}
              >
                ATIVOS
              </Text>

              <Switch
                colorScheme="green"
                size={"lg"}
                value={disableHairCut}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDisable(e)}
                isChecked={disableHairCut === 'disabled' ? false : true}
              />
            </Stack>
          </Flex>

        </Flex>
        {
          haircutList.map(haircut => (
            <Link key={haircut.id} href={`/haircuts/${haircut.id}`}>
              <Flex
                cursor={"pointer"}
                w={"100%"}
                p={4}
                bg={"barber.800"}
                direction={isMobile ? "column" : "row"}
                alignItems={isMobile ? "flex-start" : "center"}
                rounded={"4"}
                mb={2}
                justifyContent={"space-between"}
              >
                <Flex mb={isMobile ? 2 : 0} direction={"row"} alignItems={"center"} justifyContent={"center"}>
                  <IoMdPricetag size={28} color="#556B2F" />
                  <Text fontWeight={"bold"} ml={4} noOfLines={2} color={"barber.100"}>{haircut.name}</Text>
                </Flex>
                <Flex>
                  <Text fontWeight={"bold"} color={"barber.100"}>Price: R$ {haircut.price}</Text>
                </Flex>
              </Flex>
            </Link>

          ))}
      </SideBar>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  try {
    const response = await ListHaircut(true, ctx);
    console.log(response);
    return {
      props: {
        haircuts: response
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