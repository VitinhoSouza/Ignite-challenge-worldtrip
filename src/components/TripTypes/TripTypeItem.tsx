import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TripTypeIteProps {
    name: string;
    src: string;
}

export function TripTypeItem({name,src}:TripTypeIteProps){

    const isWideVersion = useBreakpointValue({ base: false, lg: true });

    return(
        <Flex w={["28","36","40"]} h={["16","24","44"]} align="center" flexDir={isWideVersion ? "column" : "row"} 
            justify={["center","center","space-around"]}
        >
            
            {isWideVersion ? (
                <Image alt={name} src={src}/>
            ):(
                <Flex fontSize={["7xl","8xl"]} color="highlight.50" align="center" justify="center" textAlign="center">
                    <Text mb={["10","14"]}>.</Text>
                </Flex>
            )}
            <Text color="gray.50" fontWeight={["500","500","600"]} fontSize={["lg","xl","2xl"]} 
                textAlign={isWideVersion ? "center":"start"} ml={["4","4","0"]}
            >
                    {name}
            </Text>
        </Flex>
    )
}