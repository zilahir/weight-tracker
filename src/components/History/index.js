/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import moment from 'moment'

import styles from './History.module.scss'
import Weight from '../common/Weight'


/**
* @author zilahir
* @function History
* */

const History = () => {
	const store = useStore()
	const [weights, setAllWeights] = useState([])

	useEffect(() => store.subscribe(() => {
		setAllWeights(store.getState().weight.addedWeights)
	}), [store])
	return (
		<div className={styles.historyRoot}>
			<ul>
				{
					weights.map(currWeight => (
						<Weight
							weight={currWeight.weight}
							date={moment(currWeight.selectedDate).format('YYYY-MM-DD')}
						/>
					))
				}
			</ul>
		</div>
	)
}

export default History
