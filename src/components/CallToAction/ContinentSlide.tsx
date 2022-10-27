import { Flex, Image, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

interface ContinentSlideProps{
    title: string;
    subtitle: string;
    image: string;
    id:string;
}

export function ContinentSlide({title,subtitle,image,id}:ContinentSlideProps){

    return(
        <Link href={`/${id}`}>
            <Flex backgroundImage={image} h="100%" align="center" justify="center" flexDir="column" gap="5px" cursor="pointer"
                onClick={()=>console.log("Vamos para ",title)}
            >
                <Text color="#F5F8FA" fontWeight="700" fontSize="5xl">{title}</Text>
                <Text color="#F5F8FA" fontWeight="700" fontSize="2xl">{subtitle}</Text>
            </Flex>
        </Link>
    )
}