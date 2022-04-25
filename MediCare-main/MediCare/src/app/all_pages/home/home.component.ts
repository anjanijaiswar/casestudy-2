import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,public http:HttpClient) {

   }
   checkoutForm = this.formBuilder.group({
    name: '',
    number: '',
    email: '',
    date: '',
    time: ''
  });

  ngOnInit(): void {
  }
  onSubmit(): void {debugger;
    // Process checkout data here
    
    this.http.post('http://localhost:5000/book',this.checkoutForm.value).subscribe(data => {
      
    
    });
    
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
