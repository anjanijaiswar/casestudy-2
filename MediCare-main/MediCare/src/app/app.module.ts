import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './new/header/header.component';
import { FooterComponent } from './new/footer/footer.component';
import { HomeComponent } from './all_pages/home/home.component';
import { AboutComponent } from './all_pages/about/about.component';
import { ServicesComponent } from './all_pages/services/services.component';
import { DoctorsComponent } from './all_pages/doctors/doctors.component';
import { BookComponent } from './all_pages/book/book.component';
import { AppointmentComponent } from './appointment/appointment.component';
// import { ContactComponent } from './all_pages/contact/contact.component';
import { ReviewComponent } from './all_pages/review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DoctorsService } from './doctors.service';
import { RouterModule } from '@angular/router';
import { ViewAppointmentsService } from './view-appointments.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    DoctorsComponent,
    BookComponent,
    ReviewComponent,
    AppointmentComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule

  ],
  providers: [DoctorsService,ViewAppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
