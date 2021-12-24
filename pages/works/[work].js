import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Divider,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import NotFound from '../404'

import { getWork } from '../api/works'

const Work = ({data}) => {
  if(!data){
    return <NotFound/>
  }
	return (
		<Layout>
      <Container>
        {data?.title && data?.date && (
          <Title>{data.title} <Badge>{data.date}</Badge></Title>
        )}

				<Section delay={0.2}>
          {data?.icon && (
            <Center my={6}>
              <Image
                src={data.icon}
                alt='icon'
                w
              />
            </Center>
          )}

          <P>
            {data?.paragraph}
          </P>
        </Section>

				<Section delay={0.4}>
					<Divider my={3}/>
          <List>
            {data?.website && (
              <ListItem>
                <Meta>Website</Meta>
                <Link href={data.website}>{data.website}</Link>
              </ListItem>
            )}
            {data?.plataform && (
              <ListItem>
                <Meta>Plataform</Meta>
                <span>{data.plataform}</span>
              </ListItem>
            )}
            {data?.stack && (
              <ListItem>
                <Meta>Stack</Meta>
                <span>{data.stack}</span>
              </ListItem>
            )}
          </List>
				</Section>

				<Section delay={0.6}>
          {data?.images.map(src => 
            <WorkImage key={src} src={src} alt={data.alt}/>
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
  ]
  return {
    paths,
    fallback: 'blocking',
  }
}
