import { 
	Heading,
	Container,
	SimpleGrid,
	Divider,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { GridItem } from '../../components/grid-item'


const PageWorks = () => {
	return (
		<Layout title='Works'>
			<Container>
				<Heading as='h2' fontSize={20} mb={4}>
					Works
				</Heading>

				<SimpleGrid columns={[1,2,2]} gap={6}>
					<Section delay={0.2}>
						<GridItem
							id='quanticon'
							section='works'
							title='Quanticon Valley'
							thumbnail='/images/works/quanticon.png'	
						>
							Interactive application for students, supporting project development. 
						</GridItem>
					</Section>
				</SimpleGrid>

				<Section delay={0.4}>
					<Divider my={3}/>
					<Heading as='h2' fontSize={20} mb={4}>
						University Projects
					</Heading>
				</Section>

				<SimpleGrid columns={[1,2,2]} gap={6}>
					<Section delay={0.6}>
						<GridItem
							id='rda'
							section='works'
							title='Radar DA'
							thumbnail='/images/works/rda.png'	
						>
							Mobile App to locate Environmental Determinants in Ramiquiri, Colombia.
						</GridItem>
					</Section>
					<Section delay={0.6}>
						<GridItem
							id='healtyhome'
							section='works'
							title='Healty Home'
							thumbnail='/images/works/healtyhome.png'	
						>
							Mobile App and IoT system to monitorate the health state of a person
						</GridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}
export default PageWorks
