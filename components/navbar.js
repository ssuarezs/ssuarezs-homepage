import Logo from './logo'
import ThemeToggle from './theme-toggle'
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

const LinkItem = ({ href, path, _target, children, ...props }) => {
	const active = path === href
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
	console.log({path, href}, active)
	return(
		<NextLink href={href} passHref>
			<Link
				p={2}
				bg={active ? 'grassTeal' : undefined}
				color={active ? '#202023' : inactiveColor}
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
				<Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
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
						Works
					</LinkItem>
					<LinkItem href='/hobbies' path={path}>
						Hobbies
					</LinkItem>
					<LinkItem 
						_target="_blank"
            href="https://github.com/ssuarezs/ssuarezs-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
					>
						<IoLogoGithub/>
						Source
					</LinkItem>
				</Stack>

				<Box flex={1} align='right'>
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
						<MenuList>
							<NextLink href='/'>
								<MenuItem>About</MenuItem>
							</NextLink>
							<NextLink href='/works'>
								<MenuItem>Works</MenuItem>
							</NextLink>
							<NextLink href='/hobbies'>
								<MenuItem>Hobbies</MenuItem>
							</NextLink>
							<MenuItem 
								as={Link} 
								href='https://github.com/ssuarezs/ssuarezs-homepage'
            style={{ gap: 8 }}
							>
								<IoLogoGithub/>
								<Text>Source</Text>
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
