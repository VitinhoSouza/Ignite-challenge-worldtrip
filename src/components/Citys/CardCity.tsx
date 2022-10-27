import { Flex, Image, Text } from "@chakra-ui/react";
import {ReactElement} from "react";

interface InfoCityProps {
    image: string;
    name: string;
    nameCountry: string;
    flagCountry: string;
}

export function CardCity({image,name,nameCountry,flagCountry}:InfoCityProps){

    return(
        <Flex flexDir="column" w="2xs" h="17.25rem" mt="10" ml="8" borderRadius="100" align="center" justify="center">
            <Image src={image} h="60%" w="100%"/>
            <Flex border="1px" borderTop="none" borderColor="highlight.50" h="40%" w="100%" align="center" justify="center">
                <Flex justify="space-between" w="80%" h="70%">
                    <Flex flexDir="column" justify="space-between">
                        <Text fontWeight="600" fontSize="xl" color="gray.50">{name}</Text>
                        <Text fontWeight="400" fontSize="md" color="rgba(153, 153, 153, 1)">{nameCountry}</Text>
                    </Flex>
                    <Flex justify="center" align="center">
                        <Image src={flagCountry} borderRadius={100} width={8} height={8}/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}