
// Helper function Parse asynchronous response data from an
// endpoint.

export const parseJSON = (response) => response.data;

// Nice way of mapping action types for respective functions.
// This is to avoid the use of 'Switch' statements.

export const createReducer = (initialState, reducerMap = {}) => {
	return (state = initialState, action) => {
		const reducer = reducerMap[action.type]
		return reducer ? reducer(state, action.payload) : state;
	}
};