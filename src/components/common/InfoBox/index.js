import React from 'react'
import Proptypes from 'prop-types'

import styles from './InfoBox.module.scss'

/**
* @author zilahir
* @function InfoBox
* */

const InfoBox = props => {
	const { title, content } = props
	return (
		<div className={styles.infoBoxContainer}>
			<h1>
				{title}
			</h1>
			<p>
				{content}
			</p>
		</div>
	)
}

InfoBox.propTypes = {
	content: Proptypes.string.isRequired,
	title: Proptypes.string.isRequired,
}

export default InfoBox
