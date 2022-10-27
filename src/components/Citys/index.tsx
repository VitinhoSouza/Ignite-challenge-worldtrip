import { Flex, Text } from "@chakra-ui/react";
import { CardCity } from "./CardCity";

type InfoCity = {
    image: string;
    name: string;
    nameCountry: string;
    flagCountry: string;
}

interface CitysProps{
    infoCitys: InfoCity[];
}

export function Citys({infoCitys}:CitysProps){

    return(
        <Flex w="100%" flexDir="column" mb="4">
            <Text mt={["0","4","10"]} ml={["6","10","14","20"]} fontSize={["2xl","3xl","4xl"]} color="gray.50" fontWeight="500">Cidades +100</Text>
            <Flex align="center" justify="center">
                <Flex w="92%" justify={["center","center","center","start"]} wrap="wrap" align="center">
                {
                    infoCitys?.map(city => (
                        <CardCity key={city.name} name={city.name} flagCountry={city.flagCountry} 
                            image={city.image} nameCountry={city.nameCountry}  />
                    ))
                }
                </Flex>
            </Flex>
        </Flex>
    )
}