import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.less']
})
export class HomeCarouselComponent implements OnInit {
  
  @Input() array: Carousel[] = [];
  @Input() title = '';
  @Input() speed = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
