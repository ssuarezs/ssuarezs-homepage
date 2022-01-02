import NextLink from 'next/link'
import { 
	Box,
	Image,
	Button,
	Heading,
	Container,
	Badge,
	List,
	ListItem,
	Link,
	useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioSkillsBox } from '../components/bio'
import WebIcon from '../components/webIcon'


import { useReadMainState } from '../lib/stateHooks'
import { getData } from './api'


const Page = () => {
	const colorScheme = useColorModeValue('blue','orange')
	const lang = useReadMainState()?.lang
	const { 
		title = 'title', name = 'name', slogan = 'slogan',
		email = 'email', phone = 'phone', resume = 'resume', 
		bioSection = [], skills = [], webLinks = []
	} = getData(lang,'Bio')
	return (
		<Layout key={`index-${lang}`}>
			<Container>
				<Box 
					bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} 
					fontWeight='bold' 
					borderRadius='lg' 
					p={3} mb={6} 
					align='center'
				>
					{title}
				</Box>
				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1}>
						<Heading as='h2' variant='page-title'>
							{name}
						</Heading>
						<p>
							{slogan}
						</p>
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

				<Section delay={0.1}>
					<Heading as='h3' variant='section-title'>
					</Heading>
					<Paragraph>
						{resume}
					</Paragraph>
					<Box align='center' my={4}>
						<NextLink href='/works'>
							<Button rightIcon={<ChevronRightIcon/>} colorScheme={colorScheme}>
								{lang === 'en' ? 'Portfolio' : 'Portafolio'}
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.2}>
					<Heading as='h3' variant='section-title'>
						{lang === 'en' ? 'Bio' : 'Biografia'}
					</Heading>
					{bioSection.map(item => 
						<BioSection key={item[1]}>
							<BioYear>{item[0]}</BioYear> 
							{item[1]} 
						</BioSection>
					)}
				</Section>

				<Section delay={0.3}>
					<Heading as='h3' variant='section-title'>
						{lang === 'en' ? 'Skills' : 'Habilidades'}
					</Heading>
					<BioSkillsBox>
						{skills.map(s => 
							<Badge 
								key={s}	m={1}
								colorScheme={colorScheme}
							>{s}</Badge>
						)}
					</BioSkillsBox>
				</Section>

				<Section delay={0.4}>
					<Heading as='h3' variant='section-title'>
						{lang === 'en' ? 'Contact' : 'Contacto'}
					</Heading>
					<List>
						<ListItem display='flex'>
							<BioYear>Email</BioYear>{email} 	
						</ListItem>
						<ListItem display='flex'>
							<BioYear>Phone</BioYear>{phone}
						</ListItem>
						<ListItem>
							.
						</ListItem>
						{webLinks.map(item => {
							return (
							<ListItem key={item.user}>
								<Link href={item.href} target="_blank">
									<Button
										variant="ghost"
										colorScheme={colorScheme}
										leftIcon={<WebIcon icon={item.icon} />}
									>
										{item.user}
										{item.icon}
									</Button>
								</Link>
							</ListItem>
							)
						})}
					</List>
				</Section>
			</Container>
		</Layout>
	)
}
export default Page
