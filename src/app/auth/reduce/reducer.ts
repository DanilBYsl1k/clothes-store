import { Action, createAction, createReducer, on } from "@ngrx/store";
import { IinitialState } from "../types/initialState";
import { loginAction, loginActionFailure, loginActionSuccess } from "./action/loginActionState";
import { logoutAction } from "./action/logoutActionState";
import { authAction, authActionFailure, authActionSuccess } from "./action/RegisterAction.action";




const initialState:IinitialState={
    register: true,
    getuser: null,
    errors: null,
    loading: false,
    disabled: false
}
const authReducer=createReducer(
    initialState,
    on(
        authAction,
        (state)=>({
            ...state,
            loading:true,
            getuser:null,
            register:false
        })
    ),
    on(
        authActionSuccess,
        (state, action)=>({
            ...state,
            getuser:action.answer,
            loading:false,
            register:false,
            disabled: true
        })
    ),
    on(
        authActionFailure,
        (state,action)=>({
            ...state,
            errors:action.error,    
            loading:true,
            disabled: false,
            register:true
        })
    ),
    on(
        loginAction,(state)=>({
            ...state,
            loading:true,
            getuser:null,
            register:false
        })
    ),
    on(
        loginActionSuccess,(state,action)=>({
            ...state,
            getuser:action.answer,
            loading:false,
            register:false,
            disabled: true
        })
    ),
    on(
        loginActionFailure,(state,action)=>({
            ...state,
            errors:action.err,    
            loading:false,
            disabled: false,
            register:true
        })
    ),
    on(
        logoutAction,(state)=>({
            ...state,
            register:true,
            getuser:null,
            disabled: false,
        })
    )
)
export function reducers(state:IinitialState, action:Action){
    return authReducer(state, action)
}