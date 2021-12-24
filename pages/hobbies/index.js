import { 
	Heading,
	Container,
	SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { GridItem } from '../../components/grid-item'


const PageHobbies = () => {
	return (
		<Layout title='Works'>
			<Container>
				<Heading as='h2' fontSize={20} mb={[4,8,8]}>
					What I love to do ♥
				</Heading>

				<Section delay={0.2}>
					<SimpleGrid columns={[1,2,2]} gap={6}>
						<GridItem
							section='hobbies'
							title='Chess'
							thumbnail='/images/hobbies/chess.png'	
						>
							I was playing and training Chess for 5 years in different categories and improving my thinking process.
						</GridItem>
						<GridItem
							section='hobbies'
							title='Linux'
							thumbnail='/images/hobbies/linux.png'	
						>
							Learn about linux based operating systems and discover new distributions, how it works and much more. I simply fell in love with it.
						</GridItem>
						<GridItem
							section='hobbies'
							title='Calisthenics'
							thumbnail='/images/hobbies/calisthenics.png'	
						>
							I have been training my body for 3 years, looking to improve and be ready to give the best of me in all aspects of my life.
						</GridItem>
					</SimpleGrid>
				</Section>
			</Container>
		</Layout>
	)
}
export default PageHobbies
