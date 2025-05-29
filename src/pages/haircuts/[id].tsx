import Head from "next/head";
import { useMediaQuery, Flex, Button, Input, Heading, Text, Stack, Switch } from "@chakra-ui/react";
import { SideBar } from "@/components/sidebar";
import Link from "next/link"
import { FiChevronLeft } from "react-icons/fi";
import { canSSRAuth } from "@/utils/CanSSRAuth";
import { Check, Count, CreateHaircut, GetHaircut } from "@/services/HairCutService";
import { ValidationEditHaircutProps, NewHaircutProps, } from "@/types/HairCutTypes"
import { ChangeEvent, useState } from "react";
import Router from 'next/router';

export default function EditHaircut({ subscription, haircut }: ValidationEditHaircutProps) {
    const [isMobile] = useMediaQuery("(max-width: 500px)");
    const [name, setName] = useState(haircut?.name);
    const [price, priceName] = useState(haircut?.price);
    const [status, setStatus] = useState(haircut?.status);
console.log(haircut?.status);
    const [disableHairCut, setDisableHaircut] = useState(haircut?.status ? "disabled" : "enabled");

    async function handleChangeStatus(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value === 'disabled') {
            setDisableHaircut("enabled");
            setStatus(false)
        } else {
            setDisableHaircut("disabled")
             setStatus(true)
        }
    }
    async function handleRegister() {
        if (name === '' || price === '') {
            alert('Preencha todos os campos!');
            return;
        }

        try {

            // await CreateHaircut({ name: name, price: price });
            Router.push('/haircuts')

        } catch (err) {
            console.log(err);
            alert("Erro ao cadastrar esse modelo.");
        }
    }

    return (
        <>
            <Head>
                <title>BarberShop - Editando modelo de Corte</title>
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
                                justifyContent={"flex-start"}
                                _hover={{ bg: "barber.800", color: "barber.100" }}
                                mb={isMobile ? 4 : 0}
                            >
                                <FiChevronLeft size={24} color={"barber.100"} />
                                Voltar
                            </Button>
                        </Link>
                        <Heading
                            fontSize={isMobile ? "28px" : "3xl"}
                            mt={4}
                            mb={4}
                            ml={4}
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
                            Editar Corte
                        </Heading>
                        <Flex w={"85%"} direction={"column"}>

                            <Input
                                placeholder="Nome do Corte"
                                _placeholder={{ color: "barber.50" }}
                                size={"lg"}
                                type="text"
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

                                mb={4}
                                bg="barber.300"
                                fontFamily="mono"
                                fontWeight="bold"
                                textColor="barber.600"
                                value={price}
                                onChange={(e) => priceName(e.target.value)}
                            />
                            <Stack mb={6} align={"center"} direction={"row"}>
                                <Text fontWeight={"bold"}>Desativar Corte</Text>
                                <Switch
                                    size={"lg"}
                                    colorScheme="green"
                                    value={disableHairCut}
                                    isChecked={disableHairCut === 'disabled' ? false : true}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeStatus(e)}
                                />
                            </Stack>
                        </Flex>
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
                            disabled={!subscription}
                        >
                            Salvar
                        </Button>
                        {!subscription && (
                            <Flex direction={"row"} align={"center"} justifyContent={"center"}>
                                <Link href={"/planos"}>
                                    <Text fontWeight={"bold"} color={"#31FB6A"} cursor={"pointer"} mr={1}>
                                        Seja premium
                                    </Text>
                                </Link>
                                <Text> e tenha todos acessos liberados.</Text>
                            </Flex>
                        )}

                    </Flex>
                </Flex>
            </SideBar>
        </>
    );
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    const id = Array.isArray(ctx.params.id) ? ctx.params.id[0] : ctx.params.id;
    console.log(id);
    try {
        const response = await GetHaircut(id, ctx);
        const check = await Check(ctx);

        return {
            props: {
                haircut: response,
                subscription: check[0]?.status ?? false,
                // count: count ?? 0
            }
        }
    } catch (err) {
        console.error(err);
        return {
            redirect: {
                destination: '/haircuts',
                permanent: false,
            },
        };
    }

})