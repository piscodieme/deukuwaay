import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogementListComponent } from './logement-list/logement-list.component';
import { LogementDetailComponent } from './logement-detail/logement-detail.component';

const routes: Routes = [
  {
    path: '', component: LogementListComponent,children: [
      {path: 'list', component: LogementListComponent},
      {path: 'detail/:id', component: LogementDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogementRoutingModule { }
