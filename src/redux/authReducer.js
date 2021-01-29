import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default :
            return state;
    }
}

export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}});


export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserData(id, login, email, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        debugger
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default usersReducer;