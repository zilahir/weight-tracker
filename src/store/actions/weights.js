import { ADD_NEW_WEIGHT, CLEAR_ALL_WEIGHT, SET_CHART_DATA } from './actionTypes'

export const addNewWeight = weightObject => dispatch => new Promise(resolve => {
	dispatch({
		type: ADD_NEW_WEIGHT,
		payload: {
			weightObject,
		},
	})
	resolve({
		success: true,
		...weightObject,
	})
})

export const clearAllWeight = () => dispatch => new Promise(resolve => {
	dispatch({
		type: CLEAR_ALL_WEIGHT,
		payload: null,
	})
	dispatch({
		type: SET_CHART_DATA,
		payload: {
			chartData: [],
		},
	})
	resolve({
		success: true,
	})
})
