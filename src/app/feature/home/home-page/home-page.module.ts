import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { HomeJumbotronComponent } from './home-jumbotron/home-jumbotron.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeWhyUsComponent } from './home-why-us/home-why-us.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HomeContactUsComponent } from './home-contact-us/home-contact-us.component';
import { HomeCovidComponent } from './home-covid/home-covid.component';
import { HomeAboutComponent } from './home-about/home-about.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeJumbotronComponent,
    HomeServicesComponent,
    HomeWhyUsComponent,
    HomeGalleryComponent,
    HomeContactUsComponent,
    HomeCovidComponent,
    HomeAboutComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NzCardModule,
  ]
})
export class HomePageModule { }
