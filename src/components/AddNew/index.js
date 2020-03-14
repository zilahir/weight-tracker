import React, { useState } from 'react'
import { useDispatch, useStore } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

import Section from '../common/Section'
import styles from './AddNew.module.scss'
import Button from '../common/Button'
import { addNewWeight } from '../../store/actions/weights'
import { WEEK, MONTH } from '../../utils/consts'
import { groupByWeek, groupByMonth } from '../../utils/formatters'
import { setChartData } from '../../store/actions/chart'


/**
* @author zilahir
* @function Home
* */

const AddNew = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [weight, setWeight] = useState(0)
	const dispatch = useDispatch()
	const store = useStore()
	function createChartData(period) {
		switch (period.btn) {
		case WEEK: {
			const grouped = groupByWeek(store.getState().weight.addedWeights)
			dispatch(setChartData(grouped))
			break
		}
		case MONTH: {
			const grouped = groupByMonth(store.getState().weight.addedWeights)
			dispatch(setChartData(grouped))
			break
		}
		default:
			return period
		}
		return true
	}


	function handleNewWeight() {
		const newWeightObject = {
			weight,
			selectedDate: moment(selectedDate.toString()).format('YYYY-MM-DD'),
		}
		Promise.all([
			dispatch(addNewWeight(newWeightObject)),
		]).then(() => {
			createChartData(store.getState().chart.period)
		})
	}
	return (
		<Section
			title="Weight tracker"
			className={styles.addNew}
		>
			<div className={styles.addNewContainer}>
				<div className={styles.innerContainer}>
					<div
						className={styles.oneInput}
					>
						<DatePicker
							showTimeSelect
							selected={selectedDate}
							onChange={date => setSelectedDate(date)}
							className={styles.datePicker}
						/>
					</div>
					<div className={styles.oneInput}>
						<input
							type="number"
							onChange={w => setWeight(parseFloat(w.target.value))}
							value={weight}
							placeholder="Enter your weight"
							step=".01"
							min={1}
						/>
					</div>
					<div className={styles.oneInput}>
						<Button
							onClick={() => handleNewWeight()}
							label="Add"
						/>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default AddNew
