import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { GetCardsService } from "../../services/get-cards.service";
import { Icard } from "../../types/Cards.interface";
import { cardPageAction, cardPageFailureAction, cardPageSuccessAction } from "../action/cardPageAction";

@Injectable({
    providedIn: 'root'
})
export class cardEffect{
    constructor(private actions$: Actions, private serviceCards:GetCardsService){}
    card$=createEffect(()=>this.actions$.pipe(
        ofType(cardPageAction),
        switchMap((numb)=>{
            return this.serviceCards.getCard(numb.request).pipe(
                map((card:Icard[]) => {
                    return cardPageSuccessAction({ answer: card });
                })
            );
        }),
        catchError((err:Error)=>{
            return of(cardPageFailureAction({err:err}))
        })
    ))
} 