import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reduce/reducer';
import { cardsEffect } from './reduce/effect/cardsEffect';



@NgModule({
  declarations: [
    ListItemsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('Adittions',reducers),
    EffectsModule.forFeature([cardsEffect]),
  ],
  exports:[ListItemsComponent]
})
export class AdditionalComponentsModule { }
