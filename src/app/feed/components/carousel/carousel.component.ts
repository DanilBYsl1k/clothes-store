import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  count=1
  ngOnInit(): void {
  }
  math(elem:number){
    if(elem==1){
      this.count++
    }
    if(elem==2){
      this.count--
    }
    console.log(this.count)
  }
}
