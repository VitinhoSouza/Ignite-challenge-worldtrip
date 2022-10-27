import { Flex, Text, Link, useBreakpointValue } from "@chakra-ui/react";

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

    const isWideVersion = useBreakpointValue({ base: false, lg: true });

    return(
        <Flex w="100%" h={["2xs","xs","sm"]} align="center" justify={["space-evenly","space-evenly","space-evenly","center"]} flexDir={["column","column","column","row"]}>
            <Text w={["90%","90%","90%","40%"]} textAlign="justify" fontSize={["sm","lg","2xl"]} color="gray.50">
                {description}
            </Text>

            <Flex w={["90%","90%","90%","40%"]} align="center" justify={["start","space-evenly"]} 
                mb="8" ml={isWideVersion ? "20" : "0"}>
                {data?.map(item=>(
                    <Flex align={isWideVersion ? "center" : "start"} flexDir="column" mr={isWideVersion ? "0": "6"}>
                        <Text fontSize={["2xl","3xl","5xl"]} color="highlight.50" fontWeight={["500","500","600"]}>
                            {item.number}
                        </Text>
                        <Text fontSize={["lg","xl","2xl"]}  color="gray.50" fontWeight={["500","500","600"]} display="flex">
                            {item.title} 
                            {item.title === "cidades +100" && (
                                <Link display="flex" alignItems="center" position="absolute" target="_blank"
                                    href="https://www.visualcapitalist.com/the-100-most-popular-city-destinations/">
                                    <InfoOutlineIcon position="relative" ml={["32","40","44"]} mt="2.5" w={[3,4]} h={[3,4]} color="rgba(153, 153, 153, 0.8)"/>
                                </Link>
                            )}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}