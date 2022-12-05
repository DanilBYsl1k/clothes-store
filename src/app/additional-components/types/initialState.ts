import { Icard } from "./Cards.interface";

export interface InitialState{
    items:Icard[]
    err:null|Error
    loading:boolean|null
}