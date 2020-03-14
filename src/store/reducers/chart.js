import { SET_CHART_DATA, SET_PERIOD } from '../actions/actionTypes'
import { periodBtns } from '../../utils/consts'

const initialState = {
	chartData: [],
	period: periodBtns[0],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_CHART_DATA:
		return {
			...state,
			chartData: action.payload.chartData,
		}
	case SET_PERIOD:
		return {
			...state,
			period: action.payload.period,
		}
	default:
		return state
	}
}

export default reducer
