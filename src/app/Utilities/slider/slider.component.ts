import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input({required:true}) title = ""
  @Input({required:true}) images = ""
  @Input({required:true}) description = ""

}
