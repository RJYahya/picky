import axios from 'axios'
import {
    FETCH_RESTURANTS_FAILURE,
    FETCH_RESTURANTS_SUCCESS,
    FETCH_RESTURANTS_REQUEST,
    POST_RESTURANTS_FAILURE,
    POST_RESTURANTS_SUCCESS,
    POST_RESTURANTS_REQUEST,
    FETCH_CATAGORY_SUCCESS
} from './resturantsType'

export const fetchResturants = () => async (dispatch) => {
    try {
        console.log('asdasd')
        dispatch(fetchResturantsRequest())
        const response = await axios.get('https://foodie-api-dash.herokuapp.com/api/Restaurants/featured?pageSize=6')
        if (response) {
            const Resturants = response.data.data
            console.log({ Resturants })
            dispatch(fetchResturantsSuccess(Resturants))
        }
    } catch (error) {
        dispatch(fetchResturantsFailure(error.message))
    }
}
////////////////////////////////////////////////////////////////////
export const sendResturants = (info) => async (dispatch) => {
    try {
        console.log('bgbg')
        dispatch(fetchResturantsRequest())
        const response = await axios.post('https://foodie-api-dash.herokuapp.com/api/Orders',{data: info})
        if (response) {
            // const Resturants = response.data.data
            console.log({ response })
            dispatch(fetchResturantsSuccess(response))
        }
    } catch (error) {
        dispatch(fetchResturantsFailure(error.message))
    }
}
////////////////////////////////////////////////////////////////////
export const fetchCatagory = () => async (dispatch) => {
    try {
        console.log('asdasd')
       
        const response = await axios.get('https://foodie-api-dash.herokuapp.com/api/Tags')
        if (response) {
            const Catagory = response.data.data
            console.log({ Catagory })
            dispatch(fetchCatagorySuccess(Catagory))
        }
    } catch (error) {
        dispatch(fetchResturantsFailure(error.message))
    }
}
//////////////////////////////////////////////////////////
export const fetchResturantsRequest = () => {
    return {
        type: FETCH_RESTURANTS_REQUEST,

    }
}
export const fetchResturantsSuccess = Resturants => {
    return {
        type: FETCH_RESTURANTS_SUCCESS,
        payload: Resturants
    }
}
export const fetchCatagorySuccess = Catagory => {
    return {
        type: FETCH_CATAGORY_SUCCESS,
        payload: Catagory
    }
}

export const fetchResturantsFailure = error => {
    return {
        type: FETCH_RESTURANTS_FAILURE,
        payload: error
    }
}
///////////////////////////////////////////////////////
export const sendResturantsRequest = () => {
    return {
        type: POST_RESTURANTS_REQUEST,

    }
}
export const sendResturantsSuccess = response => {
    return {
        type: POST_RESTURANTS_SUCCESS,
        payload: response
    }
}

export const sendResturantsFailure = error => {
    return {
        type: POST_RESTURANTS_FAILURE,
        payload: error
    }
}