import { Flex, Icon, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import Link from "next/link";

interface HeaderProps{
    withBackButton?: boolean;
}

export function Header({withBackButton = false}:HeaderProps){

    return(
        <Flex maxW={1480} h="24" align="center" justify="center">
            {withBackButton && (
                <Link href="/" style={{position:"absolute"}}>
                    <ChevronLeftIcon position="relative" mr="980px" w={6} h={6} color="gray.50"/>
                </Link>
            )}
            <Image src="logo.png"/>
        </Flex>
    )
} 