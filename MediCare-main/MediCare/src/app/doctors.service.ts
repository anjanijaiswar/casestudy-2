import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idoctor } from './idoctor'; 

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private httpClient:HttpClient) { }
  GetAllDoctors():Observable<Idoctor[]>{
    return this.httpClient.get<Idoctor[]>("https://localhost:44327/doctors/GetAllDoctors",{
      headers:{"Access-Control-Allow-Origin":"*"}
    });
  }
}
