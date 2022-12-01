import { Injectable } from "@angular/core";
import { map} from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";
import { authAction, authActionFailure, authActionSuccess } from "../action/RegisterAction.action";
import { Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
  })
export class RegisterEffect{
    constructor(private actions$: Actions, private authService:AuthService,private router: Router){
    }
    register$=createEffect(()=>this.actions$.pipe(
        ofType(authAction),
        map((request)=>{
            this.authService.register(request.request.email, request.request.password)
            if(this.authService.authBoolean){
                this.router.navigate([''])
                return authActionSuccess({answer:request.request})
            }
            else{
                return authActionFailure({error:this.authService.err})
            }
        }),
        )
    )
}