import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

// Ant Design
import { NzCardModule } from 'ng-zorro-antd/card';

// Header
import { HeaderComponent } from './shared/header/header.component';

// Footer
import { FooterComponent } from './shared/footer/footer.component';
import { FooterContactUsComponent } from './shared/footer/footer-contact-us/footer-contact-us.component';
import { FooterServicesComponent } from './shared/footer/footer-services/footer-services.component';
import { FooterLinksComponent } from './shared/footer/footer-links/footer-links.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterContactUsComponent,
    FooterServicesComponent,
    FooterLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzCardModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
