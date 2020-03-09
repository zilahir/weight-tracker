import { SET_CHART_DATA } from './actionTypes'

export const setChartData = chartData => dispatch => new Promise(resolve => {
	dispatch({
		type: SET_CHART_DATA,
		payload: {
			chartData,
		},
	})
	resolve({
		success: true,
	})
})
