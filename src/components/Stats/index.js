/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useStore, useDispatch } from 'react-redux'
import classnames from 'classnames'

import Section from '../common/Section'
import styles from './Stats.module.scss'
import { periodBtns, TAB_BTN, WEEK } from '../../utils/consts'
import Button from '../common/Button'
import Chart from '../common/Chart'
import InfoBox from '../common/InfoBox'
import { groupByWeek, groupByMonth } from '../../utils/formatters'
import { setChartData } from '../../store/actions/chart'

/**
* @author zilahir
* @function Stats
* */

const Stats = () => {
	const store = useStore()
	const dispatch = useDispatch()
	const [selectedPeriod, setSelectedPeriod] = useState(store.getState().chart.period)
	// const [chartData, setChartData] = useState(store.getState().weight.addedWeights)
	const [currentWeight, setCurrentWeight] = useState(
		store.getState().weight.addedWeights[store.getState().weight.addedWeights.length - 1],
	)

	function createChartData(period) {
		switch (period.btn) {
		case WEEK: {
			const grouped = groupByWeek(store.getState().weight.addedWeights)
			dispatch(setChartData(grouped))
		}
			break
		default:
			return period
		}
		return true
	}

	function handlePeriodSelection(period) {
		setSelectedPeriod(period)
	}
	useEffect(() => store.subscribe(() => {
		createChartData(selectedPeriod)
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
					chartData={store.getState().chart.chartData}
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
