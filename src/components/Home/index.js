import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Icon from 'react-icons-kit'
import { calendar } from 'react-icons-kit/feather/calendar'
import 'react-datepicker/dist/react-datepicker.css'

import Section from '../common/Section'
import styles from './Home.module.scss'
import Button from '../common/Button'


/**
* @author zilahir
* @function Home
* */

const Home = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [weight, setWeight] = useState(null)
	return (
		<div>
			<Section>
				<div className={styles.addNewContainer}>
					<div className={styles.oneInput}>
						<Icon icon={calendar} size="1em" />
						<DatePicker
							selected={selectedDate}
							onChange={date => setSelectedDate(date)}
						/>
					</div>
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
						onClick={() => null}
						label="Add"
					/>
				</div>
			</Section>
		</div>
	)
}

export default Home
