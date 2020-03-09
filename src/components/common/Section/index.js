import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Section.module.scss'

/**
* @author zilahir
* @function Section
* */

const Section = props => {
	const { children, title, className } = props
	return (
		<div className={classnames(
			styles.sectionContainer,
			className,
		)}
		>
			<h1>
				{title}
			</h1>
			{children}
		</div>
	)
}

Section.defaultProps = {
	className: null,
}

Section.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
}

export default Section
