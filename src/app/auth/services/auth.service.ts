import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth' 
import { Router } from '@angular/router';
import { authActionFailure } from '../reduce/action/RegisterAction.action';
import { IauthProps } from './../types/authProps.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBoolean:boolean
  err:Error
  constructor(private fireAuth:AngularFireAuth) { }

  login(email:string, password:string){
    return  this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
      this.authBoolean=true
    },err=>{
      this.authBoolean=false
      this.err=err
      console.log(err+'login')
    })
  }
  async register(email:string, password:string){
    return  await this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      this.authBoolean=true
    },err=>{
      this.authBoolean=false
      this.err=err
    })  
  }
  logout(){
    return this.fireAuth.signOut().then(()=>{
      console.log('sucsess')
    }, err=>{
      console.log(err+'logouth')
    })
  }
}
