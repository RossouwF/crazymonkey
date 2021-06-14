import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  
  gallery: Carousel[] = [
    { title: '1', image: 'home-jumbotron-l.jpg' },
    { title: '1', image: 'home-jumbotron-l.jpg' },
    { title: '1', image: 'home-jumbotron-l.jpg' },
    { title: '1', image: 'home-jumbotron-l.jpg' },
    { title: '1', image: 'home-jumbotron-l.jpg' },
  ];
  specials: Carousel[] = [
    { title: '1', image: 'home-jumbotron-l.jpg' },
    { title: '1', image: 'home-jumbotron-l.jpg' },
    { title: '1', image: 'home-jumbotron-l.jpg' },
    { title: '1', image: 'home-jumbotron-l.jpg' },
    { title: '1', image: 'home-jumbotron-l.jpg' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
