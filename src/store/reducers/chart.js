import { SET_CHART_DATA } from '../actions/actionTypes'

const initialState = {
	chartData: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_CHART_DATA:
		return {
			...state,
			chartData: action.payload.chartData,
		}
	default:
		return state
	}
}

export default reducer
