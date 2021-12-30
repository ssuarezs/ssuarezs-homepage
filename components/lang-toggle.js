import { AnimatePresence, motion } from 'framer-motion'
import { Button, Text, useColorModeValue } from '@chakra-ui/react'
import { useMainState } from '../lib/stateHooks'

import { IoLanguage } from 'react-icons/io5'

const LangToggle = () => {
	const [state, setState] = useMainState()
	const changeLang = () => {
		if(state.lang === 'en'){setState({...state, lang:'es'})}
		if(state.lang === 'es'){setState({...state, lang:'en'})}
	}
	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				style={{ display: 'inline-block' }}
				key={state.lang}
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<Button
					aria-label="Toggle lang"
					color={useColorModeValue('blue.400','orange.200')}
					bg={useColorModeValue('whiteAlpha.700','whiteAlpha.200')} 
					onClick={changeLang}
					mr={3}
					p={3}
				>
					<IoLanguage/>
					<Text ml={2} display={{base: 'none', md: 'inline-block'}}>
						{state.lang === 'en' ? 'español' : 'english'}
					</Text>
				</Button>
			</motion.div>
		</AnimatePresence>
	)
}

export default LangToggle
