import { Component, Input, OnInit } from '@angular/core';

interface ImagesSlide{
  src:string
  alt:string
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  implements OnInit{

  @Input({required:true}) title = ""
  @Input() images : ImagesSlide [] = [
    {
      src:"./../../../assets/imgsites/immoimg1.jpg",
      alt:"Maison 1"
    },
    {
      src:"./../../../assets/imgsites/immoimg2.jpg",
      alt:"Maison 2"
    },
    {
      src:"./../../../assets/imgsites/room.jpg",
      alt:"Chambre "
    }
  ]
  @Input({required:true}) description = ""
  @Input() indicateur = true
  @Input() autoSlide = false;
  @Input() slideDuration = 5000;
  selectedIndex = 0

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImage()
    }
  }
  autoSlideImage() {
    setInterval(()=>{
      this.onNextClick();
    }, this.slideDuration)
  }
  onNextClick() {
    if(this.selectedIndex=== this.images.length-1){
      this.selectedIndex = 0
    }else{
      this.selectedIndex++
    }
  }

  selectImage(index : number) : void{
    this.selectedIndex = index
  }

}
