import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainePageComponent } from './components/maine-page/maine-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalComponentsModule } from '../additional-components/additional-components.module';
import { CarouselComponent } from './components/carousel/carousel.component';


export const routes:Routes=[
  {path: '', redirectTo: 'main-page', pathMatch: 'full'},
  {path:'main-page', component:MainePageComponent},
  // {path:'main-page', component:MainePageComponent},
  {path: '**', redirectTo: 'main-page', pathMatch: 'full'},

]

@NgModule({
  declarations: [
    MainePageComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdditionalComponentsModule
    
  ]
})
export class FeedModule { }
