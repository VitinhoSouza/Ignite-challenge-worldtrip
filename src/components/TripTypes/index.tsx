import { Flex, Box } from "@chakra-ui/react"
import { TripTypeItem } from "./TripTypeItem"

export function TripTypes(){

    const tripTypes = [
        {name:"vida noturna",src:"nightlife.png"},
        {name:"praia",src:"beach.png"},
        {name:"moderno",src:"modern.png"},
        {name:"clássico",src:"classic.png"},
        {name:"e mais...",src:"more.png"}
    ]

    return(
        <Flex h={["3xs","xs","sm"]} alignItems="center" justifyContent="center" overflow="hidden">
            <Flex w="80%" align="center" justify="space-around" flexWrap="wrap">
                {tripTypes.map((value)=>(
                    <TripTypeItem name={value.name} src={value.src} key={value.name}/>
                ))}
            </Flex>
        </Flex>
    )
}