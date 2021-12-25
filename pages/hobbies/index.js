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
							Santiago was playing and training Chess for 5 years in different categories and improving his thinking process.
						</GridItem>
						<GridItem
							section='hobbies'
							title='Linux'
							thumbnail='/images/hobbies/linux.png'	
						>
							Santiago learned about linux based operating systems and discovered new distributions, how it works and much more. He just fell in love with it
						</GridItem>
						<GridItem
							section='hobbies'
							title='Calisthenics'
							thumbnail='/images/hobbies/calisthenics.png'	
						>
							Santiago have been training his body for 3 years, looking to improve and be ready to give the best of him.
						</GridItem>
					</SimpleGrid>
				</Section>
			</Container>
		</Layout>
	)
}
export default PageHobbies
