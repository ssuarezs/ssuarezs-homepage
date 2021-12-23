import Layout from '../components/layouts/main'
import { 
	ChakraProvider, 
	extendTheme 
} from '@chakra-ui/react'

const theme = extendTheme({
	config: {
		useSystemColorMode: false,
		initialColorMode: 'dark'
	}
})

const Website = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider>
			<Layout router={router}>
				<Component {...pageProps} key={router.route}/>
			</Layout>
		</ChakraProvider>
	)
}

export default Website
