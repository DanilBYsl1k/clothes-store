import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { IauthProps } from '../../types/authProps.interface'

export const authAction=createAction(
    ActionTypes.REGISTER,
    props<{request:IauthProps}>()
)
export const authActionSuccess=createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{answer:IauthProps}>()//answer register
)
export const authActionFailure=createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{error:Error}>()
)

