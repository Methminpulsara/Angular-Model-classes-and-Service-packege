import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import CustomerService from '../../../../service/CustomerService';

@Component({
  selector: 'app-addcustomer',
  imports: [FormsModule ,CommonModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddcustomerComponent {


  public customer : any={
    name : "",
    age : "",
    city: ""
  }

  public id : String=";"

  constructor(private http:HttpClient , private customerservice:CustomerService){}

  addCustomer(){

     this.customerservice.addCustomer(this.customer).subscribe((data=>{
      console.log(data);

     }),(error =>{
      console.log(error)
     }))

    }
  }



