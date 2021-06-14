import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/models/services';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.less']
})
export class HomeServicesComponent implements OnInit {

  services = Services;
  constructor() { }

  ngOnInit(): void {
  }

}
