/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useStore } from 'react-redux'
import classnames from 'classnames'

import Section from '../common/Section'
import styles from './Stats.module.scss'
import { periodBtns, TAB_BTN, WEEK } from '../../utils/consts'
import Button from '../common/Button'
import Chart from '../common/Chart'
import InfoBox from '../common/InfoBox'
import { groupByWeek, groupByMonth } from '../../utils/formatters'

/**
* @author zilahir
* @function Stats
* */

const Stats = () => {
	const store = useStore()
	const [selectedPeriod, setSelectedPeriod] = useState(periodBtns[0])
	const [chartData, setChartData] = useState(store.getState().weight.addedWeights)
	const [currentWeight, setCurrentWeight] = useState(
		store.getState().weight.addedWeights[store.getState().weight.addedWeights.length - 1],
	)
	function handlePeriodSelection(period) {
		setSelectedPeriod(period)
		switch (period.btn) {
		case WEEK:
			console.debug('hello')
			break
		default:
			return period
		}
	}
	useEffect(() => store.subscribe(() => {
		setChartData(store.getState().weight.addedWeights)
		setCurrentWeight(
			store.getState().weight.addedWeights[store.getState().weight.addedWeights.length - 1],
		)
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
									selectedPeriod.id === currBtn.id ? styles.activeBtn : null,
								)}
							>
								<Button
									type={TAB_BTN}
									onClick={() => handlePeriodSelection(currBtn)}
									label={currBtn.btn.toLowerCase()}
								/>
							</li>
						))
					}
				</ul>
				<Chart
					chartData={chartData}
				/>
				<div className={styles.infoBoxContainer}>
					<InfoBox
						title="Current weight"
						content={`${currentWeight.weight} kg`}
					/>
					<InfoBox
						title="Weight at the start of the period"
						content={10}
					/>
				</div>
			</div>
		</Section>
	)
}

export default Stats
