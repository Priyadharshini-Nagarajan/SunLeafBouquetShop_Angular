import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { MapComponent } from './pages/map/map.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"services",component: ServicesComponent},
  {path:"map",component: MapComponent},
  {path:"contact-us",component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
