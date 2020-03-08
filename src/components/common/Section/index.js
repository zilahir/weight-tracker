import React from 'react'
import PropTypes from 'prop-types'

import styles from './Section.module.scss'

/**
* @author zilahir
* @function Section
* */

const Section = props => {
	const { children } = props
	return (
		<div className={styles.sectionContainer}>
			{children}
		</div>
	)
}

Section.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Section
