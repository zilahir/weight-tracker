import React from 'react'

import AddNew from '../../AddNew'
import styles from './Home.module.scss'
import History from '../../History'
import Stats from '../../Stats'

/**
* @author zilahir
* @function Home
* */

const Home = () => (
	<div className={styles.rootContainer}>
		<AddNew />
		<History />
		<Stats />
	</div>
)

export default Home
