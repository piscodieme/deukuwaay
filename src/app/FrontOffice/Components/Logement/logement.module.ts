import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogementRoutingModule } from './logement-routing.module';
import { LogementListComponent } from './logement-list/logement-list.component';
import { LogementDetailComponent } from './logement-detail/logement-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LogementDetailComponent
  ],
  imports: [
    CommonModule,
    LogementRoutingModule,
    RouterModule
  ]
})
export class LogementModule { }
