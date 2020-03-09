/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useStore } from 'react-redux'
import classnames from 'classnames'

import Section from '../common/Section'
import styles from './Stats.module.scss'
import { periodBtns, TAB_BTN } from '../../utils/consts'
import Button from '../common/Button'

/**
* @author zilahir
* @function Stats
* */

const Stats = () => {
	const store = useStore()
	const [selectedPeriod, setSelectedPeriod] = useState(1)
	return (
		<Section
			title="Statistics"
			className={styles.statsContainer}
		>
			<div className={styles.btnContainer}>
				<ul>
					{
						periodBtns.map(currBtn => (
							<li
								key={currBtn.id}
								className={classnames(
									selectedPeriod === currBtn.id ? styles.activeBtn : null,
								)}
							>
								<Button
									type={TAB_BTN}
									onClick={() => setSelectedPeriod(currBtn.id)}
									label={currBtn.btn.toLowerCase()}
								/>
							</li>
						))
					}
				</ul>
			</div>
		</Section>
	)
}

export default Stats
