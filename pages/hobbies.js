import { 
	Box,
	Container,
	Heading
} from '@chakra-ui/react'

const PageHobbies = () => {
	return (
		<Container>
			<Box flexGrow={1}>
				<Heading as='h2' variant='page-title'>
					Hobbies
				</Heading>
			</Box>
		</Container>
	)
}
export default PageHobbies
