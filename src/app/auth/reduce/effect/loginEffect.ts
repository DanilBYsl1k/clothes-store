import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { loginAction, loginActionFailure, loginActionSuccess } from "../action/loginActionState";

@Injectable({
    providedIn: 'root'
})
export class LoginEffect{
    constructor(private actions$: Actions, private authService:AuthService,private router: Router){}
    login$=createEffect(()=>this.actions$.pipe(
        ofType(loginAction),
        map((request)=>{
            this.authService.login(request.request.email, request.request.password)
            if(this.authService.authBoolean){
                this.router.navigate(['/main-page'])
                return loginActionSuccess({answer:request.request})
            }
            else{
                return loginActionFailure({err:this.authService.err})
            }
        })
    ))
}