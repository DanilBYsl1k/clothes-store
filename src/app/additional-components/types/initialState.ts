import { Icard } from "./Cards.interface";

export interface InitialState{
    items:Icard[]|null
    err:null|Error
    loading:boolean|null
}