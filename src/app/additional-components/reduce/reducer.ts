

import { Action, createReducer, on } from '@ngrx/store'
import { InitialState } from '../types/initialState'
import { cardPageAction, cardPageFailureAction, cardPageSuccessAction } from './action/cardPageAction'
import { getCardsAction, getCardsActionFailure, getCardsActionSuccess } from './action/getCartAction'

const InitialState:InitialState={
    items: [],
    err: null,
    loading: false,
    preloader: true,
}
const additionReducer=createReducer(
    InitialState,
    on(
        getCardsAction,
        (state)=>({
            ...state,
            items:[],
            loading:false,
        })
    ),
    on(
        getCardsActionSuccess,
        (state,action)=>({
            ...state,
            items:action.answer,
            loading:true,
            preloader:false
        })
    ),
    on(
        getCardsActionFailure,
        (state,action)=>({
            ...state,
            err:action.err,
            loading:false
        })
    ),
    on(
        cardPageAction,
        (state)=>({
            ...state,
            items: [],
            err: null,
            loading: false,
        })
    ),
    on(
        cardPageSuccessAction,
        (state,action)=>({
            ...state,
            items: action.answer,
        })
    ),
    on(
        cardPageFailureAction,
        (state,action)=>({
            ...state,
            err: action.err,
            loading: false,
            preloader:true
        })
    )
)
export function reducers(state:InitialState,action:Action){
    return additionReducer(state, action)
}