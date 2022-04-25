import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './all_pages/about/about.component';
import { BookComponent } from './all_pages/book/book.component';
// import { ContactComponent } from './all_pages/contact/contact.component';
import { DoctorsComponent } from './all_pages/doctors/doctors.component';
import { HomeComponent } from './all_pages/home/home.component';
import { ServicesComponent } from './all_pages/services/services.component';
import { ReviewComponent } from './all_pages/review/review.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'doctors', component:DoctorsComponent},
  {path:'book', component:BookComponent},
  // {path:'contact', component:ContactComponent},
  {path:'review', component:ReviewComponent},
  {path:'appointment', component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
