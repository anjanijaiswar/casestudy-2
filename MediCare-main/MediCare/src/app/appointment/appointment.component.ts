import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Iappointment } from '../iappointment';
import { ViewAppointmentsService } from '../view-appointments.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointement:Iappointment[] = [];

  constructor(private router: Router,public http:HttpClient,private viewappointment: ViewAppointmentsService) { }

  ngOnInit(): void {
    this.viewappointment.GetAllAppointments().subscribe((data:any) => {
      let x = 0;
      for(x=0;x<data.length;x++){
        this.appointement.push({Id:data[x].id, Name:data[x].name, Number:data[x].number,
          Email:data[x].email,Doctorname:data[x].doctorname,Date:data[x].date,Time:data[x].time});
      }

      // console.log(JSON.stringify(this.products));

    });
  }

  


}
