import Logo from './logo'
import ThemeToggle from './theme-toggle'
import LangToggle from './lang-toggle'
import NextLink from 'next/link'
import {
	Container,
  Box,
	Text,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

import { useReadMainState } from '../lib/stateHooks'

const LinkItem = ({ href, path, _target, children, ...props }) => {
	const active = path === href
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
	const activeColor = useColorModeValue('white', 'gray.800')
	const bg = useColorModeValue('blue.400', 'orange.200')
	return(
		<NextLink href={href} passHref>
			<Link
				p={'4px 12px'}
				borderRadius='lg'
				bg={active ? bg : undefined}
				fontWeight='bold'
				color={active ? activeColor : inactiveColor}
				_target={_target}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	)
}

const Navbar = props => {
	const {path} = props
	const lang = useReadMainState()?.lang.substring(0,2)
	return (
		<Box
			position='fixed'
			as='nav' w='100%'
			bg={useColorModeValue('#ffffff40','#20202380')}
			css={{backdropFilter: 'blur(10px)'}}
			zIndex={1} {...props}
		>
			<Container
				display='flex'
				maxW='container.md'
				wrap='wrap' p={2}
				align='center'
				justify='space-between'
			>
				<Flex align='center' mr={5}>
					<Heading as='h1' size='md' fontSize='18px' letterSpacing={'tighter'}>
						<Logo/>
          </Heading>
        </Flex>

				<Stack
					direction={{base: 'column', md: 'row'}}
					display={{base: 'none', md: 'flex'}}
					width={{base: 'full', md: 'auto'}}
					alignItems='center'
					flexGrow={1}
					mt={{base: 4, md: 0}}
				>
					<LinkItem href='/works' path={path}>
						{lang === 'en' ? 'Works' : 'Experiencia'}
					</LinkItem>
					<LinkItem href='/hobbies' path={path}>
						Hobbies
					</LinkItem>
					<LinkItem 
						_target='_blank'
            href='https://github.com/ssuarezs?tab=repositories'
            path={path}
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
					>
						<IoLogoGithub/>
						Github
					</LinkItem>
				</Stack>

				<Box flex={1} align='right' display={{md: 'flex'}}>
					<LangToggle/>
					<ThemeToggle />
					<Box 
						ml={2}
						display={{base: 'inline-block', md: 'none'}}
					>
					<Menu isLazy id='navbar-menu'>
						<MenuButton
							as={IconButton}
							icon={<HamburgerIcon/>}
							variant='outline'
							aria-label='Options'
						/>
						<MenuList
							bg={useColorModeValue('#ffffffe0','#202023f0')}	
						>
							<NextLink href='/'>
								<MenuItem>
									{lang === 'en' ? 'About' : 'Acerca de'}
								</MenuItem>
							</NextLink>
							<NextLink href='/works'>
								<MenuItem>
									{lang === 'en' ? 'Works' : 'Experiencia'}
								</MenuItem>
							</NextLink>
							<NextLink href='/hobbies'>
								<MenuItem>Hobbies</MenuItem>
							</NextLink>
							<MenuItem 
								as={Link} 
								href='https://github.com/ssuarezs?tab=repositories'
            style={{ gap: 8 }}
							>
								<IoLogoGithub/>
								<Text>Github</Text>
							</MenuItem>
						</MenuList>
					</Menu>
					</Box>
				</Box>

			</Container>
		</Box>
	)
}
export default Navbar
