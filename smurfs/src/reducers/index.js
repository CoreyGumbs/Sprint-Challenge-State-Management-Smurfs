import { 
    FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, 
    POST_DATA, POST_DATA_SUCCESS, POST_DATA_FAILURE, DELETE_DATA, 
    DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE
} from '../actions/index';

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
        case POST_DATA_SUCCESS: 
            return {
                ...state,
                data: action.payload.data
            }
        case DELETE_DATA:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state;
    }

};


export const  addSmurfState = {
    isLoading: false,
    error: ''
}

export const addSmurfReducer = (state = addSmurfState, action) => {

    switch(action){
        case POST_DATA: 
            return{
                ...state,
                isLoading: !state.isLoading
            }
        case POST_DATA_SUCCESS: 
            return{
                ...state,
                isLoading: !state.isLoading
            }
        case POST_DATA_FAILURE:
            return{
                ...state,
                error: action.payload.error
            }
        
        default: 
            return state;

    }

}
