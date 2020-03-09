/* eslint-disable no-unused-vars */
import React from 'react'
import Proptypes from 'prop-types'
import {
	LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

import styles from './Chart.module.scss'

/**
* @author zilahir
* @function Chart
* */

const data = [
	{
		name: 'Page A', uv: 4000,
	},
	{
		name: 'Page B', uv: 3000,
	},
	{
		name: 'Page C', uv: 2000,
	},
	{
		name: 'Page D', uv: 2780,
	},
	{
		name: 'Page E', uv: 1890,
	},
	{
		name: 'Page F', uv: 2390,
	},
	{
		name: 'Page G', uv: 3490,
	},
]

const Chart = props => {
	const { chartData } = props
	return (
		<div className={styles.chartContainer}>
			<LineChart
				width={800}
				height={400}
				data={data}
				margin={{
					top: 5, right: 30, left: 20, bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
			</LineChart>
		</div>
	)
}

Chart.propTypes = {
	chartData: Proptypes.arrayOf(Proptypes.any).isRequired,
}

export default Chart
