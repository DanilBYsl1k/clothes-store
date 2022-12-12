import { createAction, props } from "@ngrx/store";
import { Icard } from "../../types/Cards.interface";
import { ActionTypes } from "../actionType";




export const cardPageAction=createAction(
    ActionTypes.GET_CARD,
    props<{request:number|string}>()
)
export const cardPageSuccessAction=createAction(
    ActionTypes.GET_CARD_SUCCESS,
    props<{answer:Icard[]}>()
)
export const cardPageFailureAction=createAction(
    ActionTypes.GET_CARD_FAILURE,
    props<{err:Error}>()
)