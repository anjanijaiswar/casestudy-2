import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idoctor } from 'src/app/idoctor';
import { DoctorsService } from 'src/app/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors:Idoctor[] = [];

  constructor(public http:HttpClient,private doctorsService : DoctorsService) { }

  ngOnInit(): void {
    // this.getDoctors();

    this.doctorsService.GetAllDoctors().subscribe((data:any) => {
      let x = 0;
      for(x=0;x<data.length;x++){
        this.doctors.push({Name:data[x].name, Speciality:data[x].id, Image:data[x].price});
      }

      // console.log(JSON.stringify(this.products));

    });
  }
//   getDoctors() : void{
//     this.http.get('http://localhost:5000/doctors').subscribe(data => {
//       this.doctors = data;
//       console.log(this.doctors);
    
//     });

//   }
// 
}
