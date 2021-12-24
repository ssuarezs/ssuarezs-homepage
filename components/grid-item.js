import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'
import { Global } from '@emotion/react'


export const GridItem = ({ children, id, section, title, thumbnail }) => (
  <Box w='100%' textAlign='center'>
    <NextLink href={id ? `/${section}/${id}`: '#'}>
      <LinkBox cursor='pointer'>
        <Image
          src={`${thumbnail}`}
          alt={title}
          w='100%'
          borderRadius={20}
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 20px;
      }
    `}
  />
)
