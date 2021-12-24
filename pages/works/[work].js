import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
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

        {data?.images.map(src => 
          <WorkImage key={src} src={src} alt={data.alt}/>
        )}
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
