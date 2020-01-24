import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/index';

export const initiialState = {
    isLoading: false,
    data: [],
    errors: '',
}


export const smurfReducer = (state = initiialState, action) => {

    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case FETCH_DATA_SUCCESS: 
            return {
                ...state,
                isLoading: !state.isLoading,
                data: action.payload.data
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                errors: action.payload.error
            }
        default:
            return state;
    }

};