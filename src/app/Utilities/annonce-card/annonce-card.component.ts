import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-annonce-card',
  templateUrl: './annonce-card.component.html',
  styleUrls: ['./annonce-card.component.css']
})
export class AnnonceCardComponent {
  @Input({required:true}) image =""
  @Input({required:true}) title = ""
  @Input() nbCh =0
  @Input() price =0
  @Input() nbDouche =0
  @Input() salon =0
  @Input() description = ""

}
