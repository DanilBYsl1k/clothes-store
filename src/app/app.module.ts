import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
//
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
//
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { RegisterEffect } from './auth/reduce/effect/registerEffect';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FeedModule } from './feed/feed.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FeedModule,
    FormsModule,


    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),

    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
  ],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
