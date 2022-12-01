import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from '../../reduce/action/loginActionState';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store) { }

  
  patternEmail=/^\S+@\S+\.\S+$/
  patternPasword=/[0-9a-zA-Z!@#$%^&*]{6,}/
  form:FormGroup
  ngOnInit(): void {
    this.form=new FormGroup({
      email:new FormControl("",[Validators.required,Validators.pattern(this.patternEmail)]),
      password:new FormControl("",[Validators.required, Validators.pattern(this.patternPasword)])
    })
  }
  login(){
    this.store.dispatch(loginAction({request:this.form.value}))
  }
}
