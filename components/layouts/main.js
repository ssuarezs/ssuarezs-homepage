import Head from 'next/head'
import { 
	Box,
	Text,
	Container
} from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
	const path = router.asPath
	return (
		<Box as='main' pb={14} minH='100vh' position='relative'>
			<Head>
				<meta 
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>Santiago Suarez - Homepage</title>
			</Head>

			<Navbar path={path}/>

			<Container maxW="container.md" pt='80px'>
				{children}
			</Container>

			<Box
				fontSize={14}
				bottom={4}
				position='absolute'
				textAlign='center'
				w='100%'
			>
				<Text>{new Date().getFullYear()} - Santiago Suarez</Text>
			</Box>
		</Box>
	)
}

export default Main
