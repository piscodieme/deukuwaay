import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from 'src/app/Utilities/slider/slider.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    RouterModule
  ]
})
export class AccueilModule { }
