import { Box } from "@chakra-ui/react";
import { Header } from '../components/Header';
import { Banner } from "../components/Banner";
import { TripTypes } from "../components/TripTypes";
import { CallToAction } from "../components/CallToAction";


export default function Continent() {

  return (
    <Box maxW={1480}>
      <Header/>
      <Banner/>
      <TripTypes/>
      <CallToAction/>
    </Box>
  )
}
