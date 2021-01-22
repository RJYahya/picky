import {
    FETCH_RESTURANTS_FAILURE,
    FETCH_RESTURANTS_SUCCESS,
    FETCH_RESTURANTS_REQUEST,
    POST_RESTURANTS_FAILURE,
    POST_RESTURANTS_SUCCESS,
    POST_RESTURANTS_REQUEST,
    FETCH_CATAGORY_SUCCESS
} from './resturantsType'

const initialState = {
    loading: false,
    resturants: [],
    catagory: [],
    error: '',
    response:[],
}

const ResturantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTURANTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_RESTURANTS_SUCCESS:
            return {
                ...state,
                resturants: action.payload,
                error: ''
            }
        case FETCH_CATAGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                catagory: action.payload,
                error: ''
            }
        case FETCH_RESTURANTS_FAILURE:
            return {
                loading: false,
                resturants: [],
                error: action.payload
            }
            ///////////////////////////////////////
            case POST_RESTURANTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_RESTURANTS_SUCCESS:
            return {
                ...state,
                responsr: action.payload,
                error: ''
            }
        case POST_RESTURANTS_FAILURE:
            return {
                loading: false,
                response: [],
                error: action.payload
            }
        default: return state
    }
}

export default ResturantsReducer