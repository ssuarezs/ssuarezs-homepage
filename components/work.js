import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons' 

export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href='/works'>
        <Link>Works</Link>
      </NextLink>
      <span>
        {' '} <ChevronRightIcon/> {' '} 
      </span>
      <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}
export const WorkImage = ({ src, alt }) => {
  return (
    <Image 
      src={src} 
      alt={alt}
      borderRadius={20} 
      boxShadow='lg'
      w='full' 
      mb={4}
    />
  )
}
export const Meta = ({ children }) => {
  const colorScheme = useColorModeValue('blue','orange')
  return (
    <Badge colorScheme={colorScheme} mr={3}>
      {children}
    </Badge>
  )
}
