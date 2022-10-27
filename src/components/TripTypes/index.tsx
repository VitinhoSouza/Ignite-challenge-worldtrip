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
        <Flex maxWidth={1480} h="72" alignItems="center" justifyContent="center" overflow="hidden">
            <Flex h="64" w="80%" align="center" justify="space-around">
                {tripTypes.map((value)=>(
                    <TripTypeItem name={value.name} src={value.src} key={value.name}/>
                ))}
            </Flex>
        </Flex>
    )
}