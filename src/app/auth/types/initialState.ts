import { IauthProps } from "./authProps.interface"

export interface IinitialState{
    register:boolean
    getuser:IauthProps|null
    loading:boolean
    errors:Error|null
    disabled:boolean
}