import { Component, OnInit } from '@angular/core';
import { visibileOnViewport } from 'src/app/utils/viewport-fn';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      console.log(visibileOnViewport('home-gallery'));
    });
    
  }

}
