import { REGISTER, REGISTER_DONE, REGISTER_ERRORS, REGISTER_REDIRECT } from './constants'

export function onRegister(payload) {
    return {
        type: REGISTER,
        payload,
    };
}

export function onRegisterDone(payload) {
    return {
        type: REGISTER_DONE,
        payload,
    };
}

export function onRegisterErrors(payload) {
    return {
        type: REGISTER_ERRORS,
        payload,
    };
}

export function onRegisterRedirect(){
    return {
        type: REGISTER_REDIRECT,
    }
}