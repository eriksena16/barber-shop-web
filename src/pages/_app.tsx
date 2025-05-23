import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from "next/app";
import theme from './them'
import { AuthProvider } from '@/context/AuthContext';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}
