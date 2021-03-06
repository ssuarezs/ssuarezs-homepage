import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  height: 35px;

	img{ transition: 0.3s ease; }
	&:hover img {
		transform: scale(1.2) rotate(360deg);
	}
`

const Logo = () => {
	const src = `/images/gridman${useColorModeValue('','-dark')}.png`
	return (
		<Link href='/'>
			<a><LogoBox>
				<Image src={src} width={35} height={35} alt='logo'/>
				<Text
					color={useColorModeValue('gray.800', 'whiteAlpha.900')}
					fontFamily='M PLUS Rounded 1c", sans-serif'
					fontWeight='normal'
					ml={3}
				>
					Santiago Suarez
				</Text>
			</LogoBox></a>
		</Link>
	)
}
export default Logo
