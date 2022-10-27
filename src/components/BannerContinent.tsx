import { Flex,Text } from "@chakra-ui/react";

interface BannerContinentProps{
    image: string;
    title: string;
}

export function BannerContinent({image,title}:BannerContinentProps){

    return(
        <Flex w="100%" h="md" align="center" bgImg={image}>
            <Text zIndex={2} color="#F5F8FA" fontWeight="600" fontSize="5xl" marginLeft="20" marginTop="20">{title}</Text>
        </Flex>
    )
}