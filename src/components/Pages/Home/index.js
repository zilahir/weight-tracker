import React from 'react'

import AddNew from '../../AddNew'
import styles from './Home.module.scss'

/**
* @author zilahir
* @function Home
* */

const Home = () => (
	<div className={styles.rootContainer}>
		<AddNew />
	</div>
)

export default Home
