import { Flex,Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerContinentProps{
    image: string;
    title: string;
}

export function BannerContinent({image,title}:BannerContinentProps){

    const isWideVersion = useBreakpointValue({ base: false, lg: true });

    return(
        <Flex w="100%" h={["48","64","80"]} align="center" bgImg={image} justify={isWideVersion ? "start" : "center"}>
            <Text zIndex={2} color="#F5F8FA" fontWeight="600" fontSize={["2xl","3xl","5xl"]} 
                marginLeft={isWideVersion ? "20" : "0"} marginTop={isWideVersion ? "20" : "0"}
            >{title}</Text>
        </Flex>
    )
}