import React from 'react'
import Proptypes from 'prop-types'
import classnames from 'classnames'

import styles from './Button.module.scss'

/**
* @author zilahir
* @function Button
* */

const Button = props => {
	const { onClick, label, containerClass, buttonClass } = props
	return (
		<div className={classnames(
			styles.buttonContainer,
			containerClass,
		)}
		>
			<button
				type="button"
				onClick={onClick}
				className={
					classnames(
						styles.button,
						buttonClass,
					)
				}
			>
				{label}
			</button>
		</div>
	)
}

Button.defaultProps = {
	buttonClass: null,
	containerClass: null,
}

Button.propTypes = {
	buttonClass: Proptypes.string,
	containerClass: Proptypes.string,
	label: Proptypes.string.isRequired,
	onClick: Proptypes.func.isRequired,
}

export default Button
