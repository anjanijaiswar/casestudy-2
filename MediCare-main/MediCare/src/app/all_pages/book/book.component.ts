import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewAppointmentsService } from 'src/app/view-appointments.service';
import { Iappointment } from 'src/app/iappointment';
//import { time } from 'console';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  [x: string]: any;
 


  constructor(public http:HttpClient,private router: Router,private appointmentService:ViewAppointmentsService) {
    
   }
   checkoutForm = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Number: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    Doctorname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Date: new FormControl('',[Validators.required]),
    Time: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }
  // onSubmit(): void {debugger;
  //   // Process checkout data here
    
  //   // this.http.post('http://localhost:5000/book',this.checkoutForm.value).subscribe(data => {
      
    
  //   // });
    
  //   // console.warn('Your order has been submitted', this.checkoutForm.value);
  //   // this.checkoutForm.reset();
  // }

  saveChanges(){
    let appointment:Iappointment = {
      Id: this.checkoutForm.value.Id,
      Name: this.checkoutForm.value.Name,
      Number: this.checkoutForm.value.Number,
      Email: this.checkoutForm.value.Email,
      Doctorname: this.checkoutForm.value.Doctorname,
      Date: this.checkoutForm.value.Date,
      Time: this.checkoutForm.value.Time
     
    };
    alert(" appoinment book successfully");
  this.appointmentService.addAppointment(appointment);
  
  }
 
  get Name(): FormControl {
    return this.checkoutForm.get("Name") as FormControl;
    
  }

  get Number(): FormControl {
    return this.checkoutForm.get("Number") as FormControl;
    
  }
  get Email(): FormControl {
    return this.checkoutForm.get("Email") as FormControl;
    
  }
  get Doctorname(): FormControl {
    return this.checkoutForm.get("Doctorname") as FormControl;
    
  }
  get Date(): FormControl {
    return this.checkoutForm.get("Date") as FormControl;
    
  }
  get Time(): FormControl {
    return this.checkoutForm.get("Time") as FormControl;
    
  }

}
