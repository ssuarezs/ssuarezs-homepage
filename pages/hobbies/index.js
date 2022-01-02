import { 
	Heading,
	Container,
	SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { GridItem } from '../../components/grid-item'

import { useReadMainState } from '../../lib/stateHooks'
import { getData } from '../api'

const PageHobbies = () => {
	const lang = useReadMainState()?.lang
	const hobbies = getData(lang, 'hobbiesList')
	return (
		<Layout title='Hobbies'  key={`hobbies-${lang}`}>
			<Container>
				<Heading as='h2' fontSize={20} mb={[4,8,8]}>
					{lang === 'en' ? 'What I love to do ♥' : 'Lo que me gusta hacer ♥'}
				</Heading>

				<Section delay={0.2}>
					<SimpleGrid columns={[1,2,2]} gap={6}>
						{hobbies.map(item => 
							<GridItem
								key={item.id}
								//id={item.id}
								title={item.title}
								section={item.section}
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
export default PageHobbies
