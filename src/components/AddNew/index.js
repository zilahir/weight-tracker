import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Section from '../common/Section'
import styles from './AddNew.module.scss'
import Button from '../common/Button'
import { addNewWeight, clearAllWeight } from '../../store/actions/weights'
import moment from 'moment'


/**
* @author zilahir
* @function Home
* */

const AddNew = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [weight, setWeight] = useState(0)
	const dispatch = useDispatch()

	function handleNewWeight() {
		const newWeightObject = {
			weight,
			selectedDate: moment(selectedDate.toString()).format('YYYY-MM-DD'),
		}
		Promise.all([
			dispatch(addNewWeight(newWeightObject)),
			// dispatch(clearAllWeight()),
		])
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
