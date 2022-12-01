import { createAction, props } from "@ngrx/store";
import { IauthProps } from "../../types/authProps.interface";
import { ActionTypes } from "../actionTypes";

export const loginAction=createAction(
    ActionTypes.LOGIN,
    props<{request:IauthProps}>()
)
export const loginActionSuccess=createAction(
    ActionTypes.LOGIN_SUCCES,
    props<{answer:IauthProps}>()
)
export const loginActionFailure=createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{err:Error}>()
)