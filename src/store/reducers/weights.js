import { ADD_NEW_WEIGHT } from '../actions/actionTypes'

const initialState = {
	addedWeights: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_NEW_WEIGHT:
		return {
			...state,
			addedWeights: [...state.addedWeights, action.payload.weightObject],
		}
	default:
		return state
	}
}

export default reducer
