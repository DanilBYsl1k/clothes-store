import { createAction, props } from "@ngrx/store";
import { Icard } from "../../types/Cards.interface";
import { ActionTypes } from "../actionType";



export const getCardsAction=createAction(
    ActionTypes.GET_CARDS
)
export const getCardsActionSuccess=createAction(
    ActionTypes.GET_CARDS_SUCCESS,
    props<{answer:Icard[]}>()
)
export const getCardsActionFailure=createAction(
    ActionTypes.GET_CARDS_FAILURE,
    props<{err:Error}>()
)