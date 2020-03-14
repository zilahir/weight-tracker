/* eslint-disable no-unused-vars */
import React from 'react'
import Proptypes from 'prop-types'
import moment from 'moment'
import {
	LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

import styles from './Chart.module.scss'
import { formatXAxis } from '../../../utils/formatters'

/**
* @author zilahir
* @function Chart
* */

const Chart = props => {
	const { chartData } = props
	return (
		<div className={styles.chartContainer}>
			<LineChart
				width={800}
				height={400}
				data={chartData}
				margin={{
					top: 5, right: 30, left: 20, bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="selectedDate"
					tickFormatter={formatXAxis}
				/>
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					strokeWidth={4}
					dataKey="weight"
					stroke="#000"
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</div>
	)
}

Chart.propTypes = {
	chartData: Proptypes.arrayOf(Proptypes.any).isRequired,
}

export default Chart
