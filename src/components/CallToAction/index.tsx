import { Box, Flex, Text } from "@chakra-ui/react";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Virtual  } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { ContinentSlide } from "./ContinentSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import continents from "../../../public/data.json";

export function CallToAction() {

  return (
    <Flex
      height="2xl"
      align="center"
      justify="space-between"
      flexDir="column"
      maxWidth={1480} 
      w="100%"
    >
      <Box h="2px" w="80px" bgColor="gray.50" />

      <Flex h="16" flexDir="column" align="center" mb="40px">
        <Text fontWeight="500" color="gray.50" fontSize="4xl">
          Vamos nessa?
        </Text>
        <Text fontWeight="500" color="gray.50" fontSize="4xl">
          Então escolha seu continente
        </Text>
      </Flex>

      <Flex h="md" w="90%" marginBottom="20px">
        <Swiper virtual
          modules={[Virtual, Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {continents.map((slideContent, index) => (
            <SwiperSlide key={slideContent.name} virtualIndex={index}>
              <ContinentSlide image={slideContent.image} title={slideContent.name} subtitle={slideContent.phrase} id={slideContent.id}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
}
