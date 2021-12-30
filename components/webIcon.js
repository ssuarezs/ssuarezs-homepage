import { Icon } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

const WebIcon = ({icon}) => {
	if(icon === 'instagram')
		return <Icon as={IoLogoInstagram}/>

	if(icon === 'linkedin')
		return <Icon as={IoLogoLinkedin}/>

	return <Icon as={IoLogoGithub}/>

}
export default WebIcon
