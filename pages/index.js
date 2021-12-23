import NextLink from 'next/link'
import { 
	Box,
	Image,
	Button,
	Heading,
	Container,
	List,
	ListItem,
	Link,
	Icon,
	useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { 
	BioSection, 
	BioYear, 
	BioSkillsBox,
	BioSkill
} from '../components/bio'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

const skills = ['Project Development','Strategy','Teamwork & Leadership', 'Empathy', 'Intermediate English', 'Linux', 'Initiative', 'Mobile Development', 'Teaching Skills', 'Agile Methodologies']
const webLinks = [
	{
		href: 'https://github.com/ssuarezs',
		user: '@ssuarezs',
		icon: IoLogoGithub
	},
	{
		href: 'https://www.instagram.com/ssuarez.san/',
		user: '@ssuarez.san',
		icon: IoLogoInstagram
	},
	{
		href: 'https://www.linkedin.com/in/santiago-su%C3%A1rez-423011171/',
		user: 'Santiago Suarez',
		icon: IoLogoLinkedin
	}
]

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
					<Paragraph>
						Learning is the essence of life
					</Paragraph>
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
					Developer, Chess player and 10th semester student of Electronic Engineering at the National University of Colombia. Self-taught with visualization, discipline, teamwork and leadership skills, knowledge in: 
					Agile methodologies, 
					Implementation of electronic systems, 
					IOT oriented digital systems 
					and software frontend development 
					based on Javascript and React.
				</Paragraph>
				<Box align='center' my={4}>
					<NextLink href='/works'>
						<Button rightIcon={<ChevronRightIcon/>} colorSchem='teal'>
							My portfolio
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as='h3' variant='section-title'>
					Bio
				</Heading>
				<BioSection>
					<BioYear>2000</BioYear>
					Born in Bogota, Colombia
				</BioSection>
				<BioSection>
					<BioYear>2016</BioYear> 
					Complete High School Studies in GIMFA (Air Force Military Gym) - Melgar, Tolima
				</BioSection>
				<BioSection>
					<BioYear>2017 to present</BioYear> 
					Studing electronic engineering at National University of Colombia
				</BioSection>
				<BioSection>
					<BioYear>2021 to present</BioYear> 
					Working as a freelancer Frontend Developer 
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as='h3' variant='section-title'>
					Skills
				</Heading>
				<BioSkillsBox>
					{skills.map(s => 
						<BioSkill key={s}>{s}</BioSkill>
					)}
				</BioSkillsBox>
			</Section>

			<Section delay={0.4}>
				<Heading as='h3' variant='section-title'>
					Contact
				</Heading>
				<List>
					<ListItem display='flex'>
						<BioYear>Email</BioYear> suarez.santiago.113@gmail.com
					</ListItem>
					<ListItem display='flex'>
						<BioYear>Phone</BioYear> +57 3153787486
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
									colorScheme="teal"
									leftIcon={<Icon as={item.icon} />}
								>
									{item.user}
								</Button>
							</Link>
						</ListItem>
						)
					})}
				</List>
			</Section>
		</Container>
	)
}
export default Page
