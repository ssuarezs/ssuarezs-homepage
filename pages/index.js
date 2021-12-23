import { 
	Box,
	Image,
	Heading,
	Container,
	useColorModeValue
} from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box 
				bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
				fontWeight='bold' 
				borderRadius='lg' 
				p={3} mb={6} 
				align='center'
			>
				Electronics Engineer and Web Developer
			</Box>
			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
					Santiago Suarez
					</Heading>
					<p>Learning is the essence of life</p>
				</Box>
				<Box
					flexShrink={0}
					mt={{base: 4, md: 0}}
					ml={{ md: 6 }}
					textAlign='center'
				>
					<Image
						borderColor='whiteAlpha.800'
						borderWidth={2}
						borderStyle='solid'
						maxWidth='100px'
						display='inline-block'
						borderRadius='full'
						objectFit='cover'
						src='images/santiago.png'
						alt='profile image'
					/>
				</Box>
			</Box>
		</Container>
	)
}
export default Page
