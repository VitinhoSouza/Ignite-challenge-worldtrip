import { Flex, Text, Link } from "@chakra-ui/react";

import { InfoOutlineIcon } from "@chakra-ui/icons";

interface ContinentData {
    number: number;
    title: string;
}

interface ContinentInfoProps{
    description: string;
    data: ContinentData[]
}


export function ContinentInfo({description, data}:ContinentInfoProps){

    return(
        <Flex w="100%" h="sm" align="center" justify="center">
            <Text w="40%" textAlign="justify" fontSize="2xl" color="gray.50">
                {description}
            </Text>

            <Flex w="40%" align="center" justify="space-evenly" mb="8" ml="20">
                {data?.map(item=>(
                    <Flex align="center" flexDir="column">
                        <Text fontSize="5xl" color="highlight.50" fontWeight="600">{item.number}</Text>
                        <Text fontSize="2xl" color="gray.50" fontWeight="600" display="flex">
                            {item.title} 
                            {item.title === "cidades +100" && (
                                <Link display="flex" alignItems="center" position="absolute" target="_blank"
                                    href="https://www.visualcapitalist.com/the-100-most-popular-city-destinations/">
                                    <InfoOutlineIcon position="relative" ml="44" mt="2.5" w={4} h={4} color="rgba(153, 153, 153, 0.8)"/>
                                </Link>
                            )}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}