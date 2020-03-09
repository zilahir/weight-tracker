/* eslint-disable no-nested-ternary */
import React from 'react'
import Proptypes from 'prop-types'
import classnames from 'classnames'

import styles from './Button.module.scss'
import { ICON_BTN, DEFAULT_BTN } from '../../../utils/consts'

/**
* @author zilahir
* @function Button
* */

const Button = props => {
	const { onClick, label, containerClass, buttonClass, type, icon } = props
	return (
		<>
			{
				type === DEFAULT_BTN
					? (
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
					: type === ICON_BTN
						? (
							<div className={classnames(
								styles.iconButtonContainer,
								containerClass,
							)}
							>
								{
									icon || null
								}
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
						: null
			}
		</>
	)
}

Button.defaultProps = {
	buttonClass: null,
	containerClass: null,
	icon: null,
	type: DEFAULT_BTN,
}

Button.propTypes = {
	buttonClass: Proptypes.string,
	containerClass: Proptypes.string,
	icon: Proptypes.node,
	label: Proptypes.string.isRequired,
	onClick: Proptypes.func.isRequired,
	type: Proptypes.string,
}

export default Button
