import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('fire fetch start', action)
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            console.log('fire fetch success', action)
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log('fire fetch failed', action)
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;