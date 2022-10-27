import { Box } from "@chakra-ui/react";
import { Header } from '../components/Header';
import { GetServerSideProps } from "next";
import { BannerContinent } from "../components/BannerContinent";
import { ContinentInfo } from "../components/ContinentInfo";
import { Citys } from "../components/Citys";

import continents from "../../public/data.json";

interface ContinentProps{
  slug:string;
}

export default function Continent({slug}:ContinentProps) {

  const continent = continents.find(continent => continent.id === slug);

  return (
    <Box maxW={1480}>
      <Header withBackButton={true}/>
      <BannerContinent image={continent?.image} title={continent?.name}/>
      <ContinentInfo description={continent?.description} data={continent?.data}/>
      <Citys infoCitys={continent?.cities}/>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {

  const {slug} = params;

  return{
      props:{
          slug
      }
  }
}