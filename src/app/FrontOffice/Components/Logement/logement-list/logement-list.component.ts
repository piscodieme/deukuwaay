import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logement-list',
  templateUrl: './logement-list.component.html',
  styleUrls: ['./logement-list.component.css']
})
export class LogementListComponent implements OnInit {

  imageBreadcrumb = "./../../../assets/imgsites/room.jpg"
  titleBreadcrumb = "Le portail de chez vous !"
  description = "Chez Dëkuwaay, notre mission est de rendre la recherche de logement au Sénégal plus simple, transparente et accessible pour tous nos clients. Nous sommes là pour vous accompagner à chaque étape de votre voyage vers votre nouvel habitat."
  
  image = "./../../../assets/imgsites/immoimg1.jpg"
  image2 = "./../../../assets/imgsites/immoimg2.jpg"
  image3 ="./../../../assets/imgsites/room.jpg"
  title = "Chambre Meublée"
  title2 = "Appartement"
  type="Appartement"
  type2="Chambre"
  type3 ="Magasin"
  type4 ="Villa"
  type5 ="Studio"
  type6 ="Maison"
  ngOnInit(): void {
    console.log('hello logement');
  }

}
