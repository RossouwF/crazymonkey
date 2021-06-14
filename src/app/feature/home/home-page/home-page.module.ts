import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { HomeJumbotronComponent } from './home-jumbotron/home-jumbotron.component';
import { HomeCovidComponent } from './home-covid/home-covid.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeWhoWeComponent } from './home-who-we/home-who-we.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeJumbotronComponent,
    HomeCovidComponent,
    HomeAboutComponent,
    HomeWhoWeComponent,
    HomeServicesComponent,
    HomeContactComponent,
    HomeCarouselComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NzCardModule,
    NzListModule,
    NzCarouselModule
  ]
})
export class HomePageModule { }
