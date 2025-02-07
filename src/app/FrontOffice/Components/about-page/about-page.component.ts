import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  imageBreadcrumb = "./../../../assets/imgsites/room.jpg"
  titleBreadcrumb = "Votre partenaire en matière  d’habitat au Sénégal"
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
}
