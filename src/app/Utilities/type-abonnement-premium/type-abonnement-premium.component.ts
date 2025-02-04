import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-abonnement-premium',
  templateUrl: './type-abonnement-premium.component.html',
  styleUrls: ['./type-abonnement-premium.component.css']
})
export class TypeAbonnementPremiumComponent {

  @Input({required:true}) typeAbonnement:string=""
  @Input({ required: true }) prixAbonnement: number = 0;

}
