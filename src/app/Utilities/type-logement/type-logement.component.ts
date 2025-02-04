import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-logement',
  templateUrl: './type-logement.component.html',
  styleUrls: ['./type-logement.component.css']
})
export class TypeLogementComponent {

  @Input({required:true}) type=""
  @Input({required:true}) image=""
}
