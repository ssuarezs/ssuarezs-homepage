import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: 	{ opacity: 2, x: 0, y:  0 },
	exit: 	{ opacity: 0, x:-0, y:-10 }
}

const Layout = ({ title, children }) => {
	return (
		<motion.article
			initial='hidden'
			animate='enter'
			exit='exit'
			variants={variants}
			transition={{ duration: .5, type: 'easeInOut' }}
			style={{ position: 'relative' }}
		>
			<>
				{title && (
					<Head>
						<title>{title} - Santiago Suarez</title>
					</Head>
				)}
				{children}
				<GridItemStyle/>
			</>
		</motion.article>
	)
}
export default Layout
