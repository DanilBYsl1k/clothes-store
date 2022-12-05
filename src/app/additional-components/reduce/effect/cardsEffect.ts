import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { GetCardsService } from "../../services/get-cards.service";
import { Icard } from "../../types/Cards.interface";
import { getCardsAction, getCardsActionFailure, getCardsActionSuccess } from "../action/getCartAction";

@Injectable({
    providedIn: 'root'
})
export class cardsEffect{
    constructor(private actions$: Actions, private serviceCards:GetCardsService){}
    cards$=createEffect(()=>this.actions$.pipe(
        ofType(getCardsAction),
        switchMap(()=>{
            return this.serviceCards.getCards().pipe(
                map((answer:Icard[])=>{
                    console.log(answer)
                    return getCardsActionSuccess({answer:answer})
            }))
        }),
        catchError((errorRespone:HttpErrorResponse)=>{
            return of(
                getCardsActionFailure({err:errorRespone})
            ) 
        })
    ))
}