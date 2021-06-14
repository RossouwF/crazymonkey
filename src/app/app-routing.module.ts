import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature/home/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: 'gallery',
  //   loadChildren: () => import('./feature/gallery/gallery/gallery.module').then(m => m.GalleryModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home-page/home-page.module').then(m => m.HomePageModule)
  },
  // {
  //   path: 'services',
  //   loadChildren: () => import('./feature/services/services/services.module').then(m => m.ServicesModule)
  // },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
