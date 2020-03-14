/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useStore } from 'react-redux'
import classnames from 'classnames'

import Section from '../common/Section'
import styles from './Stats.module.scss'
import { periodBtns, TAB_BTN } from '../../utils/consts'
import Button from '../common/Button'
import Chart from '../common/Chart'

/**
* @author zilahir
* @function Stats
* */

const Stats = () => {
	const store = useStore()
	const [selectedPeriod, setSelectedPeriod] = useState(1)
	const [chartData, setChartData] = useState(store.getState().weight.addedWeights)
	function handlePeriodSelection(period) {
		setSelectedPeriod(period)
	}
	useEffect(() => store.subscribe(() => {
		setChartData(store.getState().weight.addedWeights)
	}), [store])
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
									onClick={() => handlePeriodSelection(currBtn.id)}
									label={currBtn.btn.toLowerCase()}
								/>
							</li>
						))
					}
				</ul>
				<Chart
					chartData={chartData}
				/>
			</div>
		</Section>
	)
}

export default Stats
