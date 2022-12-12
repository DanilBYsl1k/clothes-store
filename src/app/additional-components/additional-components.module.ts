import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reduce/reducer';
import { cardsEffect } from './reduce/effect/cardsEffect';
import { RouterModule } from '@angular/router';
import { PageCardComponent } from './components/page-card/page-card.component';
import { cardEffect } from './reduce/effect/CardPageEffect';



@NgModule({
  declarations: [
    ListItemsComponent,
    PageCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature('Adittions',reducers),
    EffectsModule.forFeature([cardsEffect, cardEffect]),
  ],
  exports:[ListItemsComponent]
})
export class AdditionalComponentsModule { }
