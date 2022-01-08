import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = (username, password) => {
    return async(dispatch) => {

        const resp = await fetchSinToken('auth/login', {username, password }, 'POST')
        
        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            const user ={
                uid: body.uid,
                name: body.username,
                hasVote: body.hasVote
            }
            dispatch(login(user))
        } else {
            Swal.fire('Error', body.msg, 'error')
        }

    }
}



export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('auth/renew')
        
        const body = await resp.json();
        
        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            const user ={
                uid: body.uid,
                name: body.name,
                hasVote: body.hasVote
            }
        
            dispatch(login(user))
        } else {
            dispatch( checkingFinish());
           
        }
    }
}

export const endStartLoading = (userId) => {
    return async(dispatch) => {
        
        try {
            // const userId ={
            //     userId: uid
            // }
            const resp = await fetchConToken(`auth/end`, {userId}, 'PUT' );
            const body = await resp.json();

            if (body.ok) {
                dispatch(startLogout())

            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error)
        }
    }
}



const endUser = () => ({ type: types.endUser });

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
    type: types.authLogin,
    payload: user          
})


export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout 
})