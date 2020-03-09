import React from 'react'
import PropTypes from 'prop-types'

import styles from './Section.module.scss'

/**
* @author zilahir
* @function Section
* */

const Section = props => {
	const { children, title } = props
	return (
		<div className={styles.sectionContainer}>
			<h1>
				{title}
			</h1>
			{children}
		</div>
	)
}

Section.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
}

export default Section
