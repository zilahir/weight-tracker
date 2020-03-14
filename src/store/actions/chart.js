import { SET_CHART_DATA, SET_PERIOD } from './actionTypes'

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

export const setPeriod = period => dispatch => new Promise(resolve => {
	dispatch({
		type: SET_PERIOD,
		payload: {
			period,
		},
	})
})
