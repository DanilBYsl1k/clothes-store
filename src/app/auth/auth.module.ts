import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

export const routes:Routes=[
  {path:"Login", component:LoginComponent},
  {path:"Register", component:RegisterComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[AuthService]
})
export class AuthModule { }
