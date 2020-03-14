/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useStore, useDispatch } from 'react-redux'

import styles from './History.module.scss'
import Weight from '../common/Weight'
import Section from '../common/Section'
import { clearAllWeight } from '../../store/actions/weights'


/**
* @author zilahir
* @function History
* */

const History = () => {
	const store = useStore()
	const dispatch = useDispatch()
	const [weights, setAllWeights] = useState(store.getState().weight.addedWeights)

	useEffect(() => store.subscribe(() => {
		setAllWeights(store.getState().weight.addedWeights)
	}), [store])

	function clearHistory() {
		dispatch(clearAllWeight())
	}
	return (
		<Section
			title="History"
			className={styles.historyRoot}
		>
			<div className={styles.del}>
				<button
					onClick={() => clearHistory()}
					type="button"
				>
					clear
				</button>
			</div>
			<ul>
				{
					weights.map(currWeight => (
						<Weight
							weight={currWeight.weight}
							date={currWeight.selectedDate}
						/>
					))
				}
			</ul>
		</Section>
	)
}

export default History
