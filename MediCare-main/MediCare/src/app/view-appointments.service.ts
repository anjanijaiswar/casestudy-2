import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iappointment } from './iappointment'; 



@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentsService {

  constructor(private httpClient:HttpClient) { }
  GetAllAppointments():Observable<Iappointment[]>{
    return this.httpClient.get<Iappointment[]>("https://localhost:44305/api/Bookappointments",{
      headers:{"Access-Control-Allow-Origin":"*"}
    });
  }

  addAppointment(appointment : Iappointment){
    this.httpClient.post("https://localhost:44305/api/Bookappointments",appointment,{
      headers:{"Access_Control-Allow-Origin":"*"}
    }).subscribe((appointment) => {
        console.log(<Iappointment>appointment);
      });
  }

 
  
}
