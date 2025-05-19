
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// const config: ThemeConfig = {
//   initialColorMode: 'dark', // ou 'light'
//   useSystemColorMode: false,
// }
// const colors2 = {
//     barber: {
//         900: " #333333",
//         400: " #4E342E",
//         150: " #E3D1B2",
//         100: " #F5EEE2",
//         50: " #556B2F",
//     },
//     button: { 
//         cta: " #556B2F",
//         default: " #E3D1B2",
//         darkgray: " #333333",
//         danger: " #FF4040",
//     },
//     green: {
//         900: " #556B2F",
//     },
// }

const colors = {
  barber: {
    900: " #B22222",
    800: " #2C3E50",
    700: " #333333",
    600: " #4C6E75",
    500: " #F2C94C",
    400: " #D1D111",
    300: " #E8DED1",
    200: " #4E342E",
    100: " #F5EEE2",
  },
  button: {
    cta: " #F5EEE2",
    default: " #4C6E75",
    darkgray: " #333333",
    danger: " #B22222",
  },
  green: {
    600: " #4C6E75",
  },
};

// const colors2 = {
//     barber: {
//         900 : {value : " #333333"},
//         400 : {value : " #4E342E"},
//         100 : {value : " #E3D1B2"},
//         50  : {value : " #556B2F"}
//     }, 
//     button: {
//         cta : {value : " #556B2F"},
//         default : {value : " #E3D1B2"},
//         darkGray: {value : " #333333"},  
//         danger : {value : " #FF4040"}
//     },
//     green:{
//         900 : {value : " #556B2F"}
//     }
// }

const theme = extendTheme({ colors })

export default theme