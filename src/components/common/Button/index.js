/* eslint-disable no-nested-ternary */
import React from 'react'
import Proptypes from 'prop-types'
import classnames from 'classnames'
import styled from 'styled-components'

import styles from './Button.module.scss'
import { TAB_BTN, DEFAULT_BTN } from '../../../utils/consts'


/**
* @author zilahir
* @function Button
* */

const TabBtn = styled.div``

const Button = props => {
	const { onClick, label, containerClass, buttonClass, type } = props
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
					: type === TAB_BTN
						? (
							<TabBtn className={classnames(
								styles.tabButtonContainer,
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
							</TabBtn>
						)
						: null
			}
		</>
	)
}

Button.defaultProps = {
	buttonClass: null,
	containerClass: null,
	type: DEFAULT_BTN,
}

Button.propTypes = {
	buttonClass: Proptypes.string,
	containerClass: Proptypes.string,
	label: Proptypes.string.isRequired,
	onClick: Proptypes.func.isRequired,
	type: Proptypes.string,
}

export default Button
