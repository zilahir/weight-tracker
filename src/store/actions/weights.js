import { ADD_NEW_WEIGHT } from './actionTypes'

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
