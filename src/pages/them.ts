
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// const config: ThemeConfig = {
//   initialColorMode: 'dark', // ou 'light'
//   useSystemColorMode: false,
// }
const colors = {
    barber: {
        900: "#333333",
        400: "#4E342E",
        100: "#E3D1B2",
        50: "#556B2F",
    },
    button: {
        cta: "#556B2F",
        default: "#E3D1B2",
        darkgray: "#333333",
        danger: "#FF4040",
    },
    green: {
        900: "#556B2F",
    },
}

const theme = extendTheme({ colors })

export default theme