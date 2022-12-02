import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetCardsService } from "../../services/get-cards.service";
import { getCardsAction } from "../action/getCartAction";

@Injectable({
    providedIn: 'root'
})
export class cardsEffect{
    constructor(private actions$: Actions, private serviceCards:GetCardsService){}
    cards$=createEffect(()=>this.actions$.pipe(
        ofType(getCardsAction)
    ))
}