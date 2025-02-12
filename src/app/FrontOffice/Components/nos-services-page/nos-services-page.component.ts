import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-services-page',
  templateUrl: './nos-services-page.component.html',
  styleUrls: ['./nos-services-page.component.css']
})
export class NosServicesPageComponent implements OnInit {


  imageBreadcrumb = "./../../../assets/imgsites/immoimg1.jpg"
  titleBreadcrumb = "Bienvenue chez vous !"
  description = " Dëkuwaay, c'est bien plus qu'une simple agence immobilière. C’est le portail de chez vous !  Nous sommes votre allié de confiance dans la recherche du logement idéal au Sénégal. Notre engagement c’est de vous aider à trouver le lieu qui vous convient le mieux, un endroit où vous pourrez créer des souvenirs inoubliables !"

  abonnements = [
    {id:1, typeAbonnement:"Pack Premium", price: 10000},
    {id:2, typeAbonnement:"Pack Silver", price: 15000},
    {id:3, typeAbonnement:"Pack Gold", price: 25000},
    {id:4, typeAbonnement:"Pack Diamond", price: 30000}
  ]
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
