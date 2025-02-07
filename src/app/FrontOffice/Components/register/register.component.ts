import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  list = [
    { code: 'CRT', libelle: "Courtier" },
    { code: 'AGC', libelle: "Agence" },
    { code: 'ANC', libelle: "Annonceur" },
    { code: 'VST', libelle: "Visiteur" }
  ]
}
