import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Customer from '../../../../model/Customer';
import CustomerService from '../../../../service/CustomerService';
@Component({
  selector: 'app-manegecustomer',
  imports: [CommonModule,FormsModule],
  templateUrl: './manegecustomer.component.html',
  styleUrl: './manegecustomer.component.css'
})
export class ManegecustomerComponent {



  public id: number = 0;
  public name:string="";

  customerList:Customer[]=[];


  constructor(private http :HttpClient , private customerService : CustomerService){
    this.loadCustomer();
  }



  loadCustomer(){
    this.customerService.loadCustomer().subscribe((data)=>{
      this.customerList=data;
      console.log(data);
    })
  }


  deleteCustomer(customerId:number){
    this.customerService.deleteCustomer(customerId).subscribe((data)=>{
      this.loadCustomer();
    })
  }

 searchCustomer(){
  this.customerService.searchCustomer(this.name).subscribe((data)=>{
      this.customerList=[data];
  })
 }

 updatecustomer(customer:Customer){
  this.customerService.updateCustomer(customer).subscribe((data)=>{
    this.loadCustomer();
  })
 }

}








