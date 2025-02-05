import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './FrontOffice/Components/Accueil/accueil/accueil.component';
import { NotFoundComponent } from './Utilities/not-found/not-found.component';
import { LogementListComponent } from './FrontOffice/Components/Logement/logement-list/logement-list.component';
import { AboutPageComponent } from './FrontOffice/Components/about-page/about-page.component';
import { AgencesPageComponent } from './FrontOffice/Components/agences-page/agences-page.component';
import { NosServicesPageComponent } from './FrontOffice/Components/nos-services-page/nos-services-page.component';
import { LoginComponent } from './FrontOffice/Components/login/login.component';
import { RegisterComponent } from './FrontOffice/Components/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'accueil',
    component:AccueilComponent
  },
  {
    path: 'logementList',
    component: LogementListComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'les-agences',
    component: AgencesPageComponent
  },
  {
    path: 'nos-services',
    component: NosServicesPageComponent
  },
  {
    path: 'logementDetail/:id',
    component: LogementListComponent
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  },
  { path: 'logement', loadChildren: () => import('./FrontOffice/Components/Logement/logement.module').then(m => m.LogementModule) },
  { path: 'accueil', loadChildren: () => import('./FrontOffice/Components/Accueil/accueil.module').then(m => m.AccueilModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
