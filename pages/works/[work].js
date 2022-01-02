import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Divider,
  Image,
} from '@chakra-ui/react'

import NotFound from '../404'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

import { IoLogoGithub } from 'react-icons/io5'

import { useReadMainState } from '../../lib/stateHooks'
import { getWork } from '../api'

const Work = ({data}) => {
	const lang = useReadMainState()?.lang
  const { 
    title = 'title', 
    icon = '', alt = '',
    website = '', plataform = '',
    stack = '', github = '', 
    images = []
  } = data
  const { date = '', paragraph = '' } = data[lang] || {}

  if(!data){
    return <NotFound/>
  }

	return (
		<Layout key={`work-${title}-${lang}`}>
      <Container>
        <Title>
          {title && date && <>{title} <Badge>{date}</Badge></>}
        </Title>

				<Section delay={0.2}>
          {icon && (
            <Center my={6}>
              <Image
                src={icon}
                alt='icon'
                w
              />
            </Center>
          )}

          <P>
            {paragraph}
          </P>
        </Section>

				<Section delay={0.4}>
					<Divider my={3}/>
          <List>
            {website && (
              <ListItem>
                <Meta>Website</Meta>
                <Link href={website}>{website}</Link>
              </ListItem>
            )}
            {plataform && (
              <ListItem>
                <Meta>Plataform{lang==='es'&&'a'}</Meta>
                <span>{plataform}</span>
              </ListItem>
            )}
            {stack && (
              <ListItem>
                <Meta>Stack</Meta>
                <span>{stack}</span>
              </ListItem>
            )}
            {github && (
              <ListItem 
                display='flex' mt={4} gap={4}
                alignItems='center' 
              >
                <IoLogoGithub fontSize={24}/>
                <Link href={github}>{github}</Link>
              </ListItem>
            )}
          </List>
				</Section>

				<Section delay={0.6}>
          {images.map(src => 
            <WorkImage key={src} src={src} alt={alt}/>
          )}
        </Section>
      </Container>
		</Layout>
	)
}

export default Work

export const getStaticProps = async ({ params }) => {
  const data = getWork(`${params.work}`)
  if(!data){
    return { props: {} }
  }
  return { props: { data } }
}

export const getStaticPaths = async () => {
  const paths = [
    { params: { work: 'quanticon' } },
    { params: { work: 'rda' } },
    { params: { work: 'healtyhome' } }
  ]
  return {
    paths,
    fallback: 'blocking',
  }
}
