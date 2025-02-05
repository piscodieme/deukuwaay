import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './FrontOffice/Components/Accueil/accueil/accueil.component';
import { LogementListComponent } from './FrontOffice/Components/Logement/logement-list/logement-list.component';
import { LogementDetailComponent } from './FrontOffice/Components/Logement/logement-detail/logement-detail.component';
import { HeaderComponent } from './Utilities/header/header.component';
import { FooterComponent } from './Utilities/footer/footer.component';
import { SidebarComponent } from './Utilities/sidebar/sidebar.component';
import { SliderComponent } from './Utilities/slider/slider.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './Utilities/not-found/not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LogementModule } from './FrontOffice/Components/Logement/logement.module';
import { AccueilModule } from './FrontOffice/Components/Accueil/accueil.module';
import { AnnonceCardComponent } from './Utilities/annonce-card/annonce-card.component';
import { FormsModule } from '@angular/forms';
import { TypeLogementComponent } from './Utilities/type-logement/type-logement.component';
import { AboutPageComponent } from './FrontOffice/Components/about-page/about-page.component';
import { NosServicesPageComponent } from './FrontOffice/Components/nos-services-page/nos-services-page.component';
import { AgencesPageComponent } from './FrontOffice/Components/agences-page/agences-page.component';
import { TypeAbonnementPremiumComponent } from './Utilities/type-abonnement-premium/type-abonnement-premium.component';
import { TypeAbonnementComponent } from './Utilities/type-abonnement/type-abonnement.component';
import { LoginComponent } from './FrontOffice/Components/login/login.component';
import { RegisterComponent } from './FrontOffice/Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SliderComponent,
    NotFoundComponent,
    LogementListComponent,
    SliderComponent,
    AccueilComponent,
    AnnonceCardComponent,
    TypeLogementComponent,
    AboutPageComponent,
    NosServicesPageComponent,
    AgencesPageComponent,
    TypeAbonnementPremiumComponent,
    TypeAbonnementComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule ,
        NgbPaginationModule,
        LoadingBarModule,
        NgxSpinnerModule,
        ToastrModule.forRoot({
            positionClass:'toast-top-right',
            timeOut: 5000,
            progressBar: true,
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
