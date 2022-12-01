import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { authAction } from '../../reduce/action/RegisterAction.action';
import {  errorSelector, loadingSelector } from '../../reduce/selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private store:Store) { }
  disBtn$:Observable<boolean>=this.store.select(loadingSelector)
  err$=this.store.select(errorSelector)
  
  patternEmail=/^\S+@\S+\.\S+$/
  patternPasword=/[0-9a-zA-Z!@#$%^&*]{6,}/
  form:FormGroup
  ngOnInit(): void {
    // console.log(!true)
    this.form=new FormGroup({
      email:new FormControl("",[Validators.required,Validators.pattern(this.patternEmail)]),
      password:new FormControl("",[Validators.required, Validators.pattern(this.patternPasword)])
    })
  }
  register():void{
    this.store.dispatch(authAction({request:this.form.value}))
  }
}
