import Head from 'next/head'
import { 
	Box,
	Text,
	Center,
	Container
} from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
	const path = router.asPath
	return (
		<Box as='main' pb={3}>
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
			<Center
				mt={5}
				fontSize={14}
			>
				<Text>{new Date().getFullYear()} - Santiago Suarez</Text>
			</Center>
		</Box>
	)
}

export default Main
