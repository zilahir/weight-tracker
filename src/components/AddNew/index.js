import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Section from '../common/Section'
import styles from './AddNew.module.scss'
import Button from '../common/Button'
import { addNewWeight } from '../../store/actions/weights'


/**
* @author zilahir
* @function Home
* */

const AddNew = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [weight, setWeight] = useState(null)
	const dispatch = useDispatch()

	function handleNewWeight() {
		const newWeightObject = {
			weight,
			selectedDate,
		}
		Promise.all([
			dispatch(addNewWeight(newWeightObject)),
		])
	}
	return (
		<Section>
			<div className={styles.addNewContainer}>
				<div className={styles.innerContainer}>
					<div
						className={styles.oneInput}
					>
						<DatePicker
							selected={selectedDate}
							onChange={date => setSelectedDate(date)}
							className={styles.datePicker}
						/>
					</div>
					<div className={styles.oneInput}>
						<input
							type="number"
							onChange={w => setWeight(w.target.value)}
							value={weight}
							placeholder="Enter your weight"
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
