import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { reducers } from './reduce/reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './reduce/effect/registerEffect';
import { HttpClientModule } from '@angular/common/http';
import { LoginEffect } from './reduce/effect/loginEffect';

export const routes:Routes=[
    {path:"Login", component:LoginComponent},
    {path:"Register", component:RegisterComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    StoreModule.forFeature('auth',reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
  ],
  providers:[AuthService ]
})
export class AuthModule { }
