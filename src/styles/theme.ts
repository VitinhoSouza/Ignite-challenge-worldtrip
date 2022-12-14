import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        gray:{
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#47585B",
        },
        highlight:{
            "50":"#FFBA08"
        }
    },
    fonts:{
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`,
        mono: `'Poppins',  sans-serif`,
    },
    styles: {
        global:{
            body:{
                bg: 'rgba(245, 248, 250, 1)',
                color: 'gray.50'
            }
        }
    }
})