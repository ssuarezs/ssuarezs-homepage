import { 
	Heading,
	Container,
	SimpleGrid,
	Divider
} from '@chakra-ui/react'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbQV from '../../public/images/quanticon.png'
import thumbRDA from '../../public/images/rda.png'
import thumbHH from '../../public/images/healtyhome.png'

const PageWorks = () => {
	return (
		<Container>
			<Heading as='h2' fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1,2,2]} gap={6}>
				<Section>
					<WorkGridItem
						id='quanticon'
						title='Quanticon Valley'
						thumbnail={thumbQV}	
					>
						Interactive application for students, supporting project development. 
					</WorkGridItem>
				</Section>
			</SimpleGrid>

			<Section delay={0.2}>
				<Divider my={3}/>
				<Heading as='h2' fontSize={20} mb={4}>
					University Projects
				</Heading>
			</Section>

			<SimpleGrid columns={[1,2,2]} gap={6}>
				<Section>
					<WorkGridItem
						id='rda'
						title='Radar DA'
						thumbnail={thumbRDA}	
					>
						Mobile App to locate Ambiental Determinants in Ramiquiri, Colombia.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem
						id='healtyhome'
						title='Healty Home'
						thumbnail={thumbHH}	
					>
						Mobile App and IoT system to monitorate the health state of a person
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	)
}
export default PageWorks
