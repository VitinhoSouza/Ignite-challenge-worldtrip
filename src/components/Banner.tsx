import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner(){

    const isWideVersion = useBreakpointValue({ base: false, lg: true });

    return(
        <Flex maxW={1480} h={["48","64","80"]} align="center" justify="space-evenly" bgImg="banner.png">
            <Flex flexDirection="column" align="center" justify="center" height="100%" width={["xs","sm","lg"]}>
                <Text width="100%" color="white" fontWeight="500" fontSize={["xl","2xl","4xl"]} 
                    lineHeight={["2xl","3xl","5xl"]}
                >
                    5 Continentes, infinitas possibilidades.
                </Text>
                <Text marginTop="30px" width="100%" color="#DADADA" textAlign="start" fontSize={["sm","md","xl"]}
                     lineHeight={["md","xl","3xl"]}
                >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Flex>

            {isWideVersion && <Image marginTop="20" src="airplane.png" transform="rotate(0deg)"/>}
        </Flex>
    )
}