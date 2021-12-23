import { 
	Box,
	Container,
	Heading
} from '@chakra-ui/react'

const PageWorks = () => {
	return (
		<Container>
			<Box flexGrow={1}>
				<Heading as='h2' variant='page-title'>
					Works
				</Heading>
			</Box>
		</Container>
	)
}
export default PageWorks
