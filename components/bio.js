import { Box, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  display: flex;
`

export const BioYear = styled(Box)`
  font-weight: bold;
  min-width: 80px;
  max-width: 80px;
`

export const BioSkillsBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`

export const BioSkill = ({ children }) => 
  <Box 
    bg={useColorModeValue('#ccdfea', '#f0e7db')}
    color='#202023'
    borderRadius='full'
    fontWeight='bold'
    fontSize='.8em'
    align='center'
    width='auto'
    py={1}
    px={4}
    m={1}
  >
    {children}
  </Box>


