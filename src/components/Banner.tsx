import { Flex, Image, Text } from "@chakra-ui/react";

export function Banner(){

    return(
        <Flex maxW={1480} h="80" align="center" justify="space-evenly" bgImg="banner.png">
            <Flex flexDirection="column" align="center" justify="center" height="100%" width="524px">
                <Text width="100%" color="white" fontWeight="500" fontSize="4xl" lineHeight="54px">5 Continentes, infinitas possibilidades.</Text>
                <Text marginTop="30px" width="100%" color="#DADADA" textAlign="start" fontSize="xl" lineHeight="30px">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Flex>

            <Image marginTop="20" src="airplane.png" transform="rotate(0deg)"/>
        </Flex>
    )
}