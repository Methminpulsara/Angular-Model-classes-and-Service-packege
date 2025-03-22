import { HttpClient } from "@angular/common/http";
import Customer from "../model/Customer";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})

export default class CustomerService{


  constructor(private http:HttpClient){}


  loadCustomer ():Observable <Customer[]> {
      return this.http.get<Customer[]>("http://localhost:8080/customer/getAll");

  }


  addCustomer(customer: Customer) {
    return this.http.post("http://localhost:8080/customer/add", customer);
  }


  deleteCustomer(customerId:number){
    return this.http.delete("http://localhost:8080/customer/delete/"+customerId);
    }
  }




