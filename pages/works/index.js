import { 
	Heading,
	Container,
	SimpleGrid,
	Divider,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { GridItem } from '../../components/grid-item'

import { useReadMainState } from '../../lib/stateHooks'
import { getData } from '../api'

const PageWorks = () => {
	const lang = useReadMainState()?.lang
	const { works = [], others = {} } = getData(lang,'worksList')
	return (
		<Layout title='Works' key={`works-${lang}`}>
			<Container>
				<Heading as='h2' fontSize={20} mb={4}>
					{lang === 'en' ? 'Works' : 'Experiencia'}
				</Heading>

				<Section delay={0.2}>
					<SimpleGrid columns={[1,2,2]} gap={6}>
						{works.map(item => 
							<GridItem
								key={item.id}
								id={item.id}
								section={item.section}
								title={item.title}
								thumbnail={item.thumb}	
							>
								{item.desc} 
							</GridItem>
						)}
					</SimpleGrid>
				</Section>

				<Section delay={0.4}>
					<Divider my={3}/>
					<Heading as='h2' fontSize={20} mb={4}>
						{others.name}
					</Heading>
				</Section>

				<Section delay={0.6}>
					<SimpleGrid columns={[1,2,2]} gap={6}>
						{others.works.map(item => 
							<GridItem
								key={item.id}
								id={item.id}
								section={item.section}
								title={item.title}
								thumbnail={item.thumb}	
							>
								{item.desc} 
							</GridItem>
						)}
					</SimpleGrid>
				</Section>
			</Container>
		</Layout>
	)
}
export default PageWorks
