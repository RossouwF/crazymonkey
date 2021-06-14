import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.less']
})
export class HomeAboutComponent implements OnInit {

  abouts: About[] = [
    { title: 'Centrally Located',  description: 'We are centrally located in Centurion.', image: 'centrally-located.jpg'} as About,
    { title: 'Professional Service',  description: 'We offer professional services to the public.', image: 'professional-service.jpg'} as About,
    { title: 'Fast Lead Times',  description: 'Our lead times are unmatched.', image: 'fast-lead-times.jpg'} as About,
    { title: 'Cost-Effective',  description: 'We offer services at cost effective and competitive prices.', image: 'cost-effective.jpg'} as About,
    { title: 'Years of Experience',  description: 'We have XX years of experience in industry.', image: 'years-experrience.jpg'} as About,
    { title: 'Quality Parts',  description: 'We only source the best quality parts for all your vehicle needs.', image: 'car-parts.jpg'} as About,

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
