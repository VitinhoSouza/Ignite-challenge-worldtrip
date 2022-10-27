import { Flex, Image, Text } from "@chakra-ui/react";

interface TripTypeIteProps {
    name: string;
    src: string;
}

export function TripTypeItem({name,src}:TripTypeIteProps){

    return(
        <Flex w="40" h="44" align="center" flexDir="column" justify="space-around">
            <Image alt={name} src={src}/>
            <Text color="gray.50" fontWeight="600" fontSize="2xl">{name}</Text>
        </Flex>
    )
}