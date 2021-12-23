import { 
	Box,
	Container,
	Heading
} from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box bg='red' fontWeight='bold' borderRadius='lg' p={3} mb={6} align='center'>
				Electronics Engineer and Web Developer
			</Box>
			<Box flexGrow={1}>
				<Heading as='h2' variant='page-title'>
				Santiago Suarez
				</Heading>
				<p>Learning is the essence of life</p>
			</Box>
		</Container>
	)
}
export default Page
