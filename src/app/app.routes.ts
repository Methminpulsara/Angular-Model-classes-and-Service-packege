import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AddcustomerComponent } from './page/dashboard/addcustomer/addcustomer.component';
import { DashComponent } from './page/dashboard/dash/dash.component';
import { ManegecustomerComponent } from './page/dashboard/manegecustomer/manegecustomer.component';


export const routes: Routes = [
    {
      path:"",
      component:DashboardComponent
    }
    ,
    {
      path:"dashboard",
      component:DashboardComponent,
      children:[
        {
          path: "addcustomer",
          component : AddcustomerComponent
        },{
          path:"dash",
          component: DashComponent
        },{
          path: "edit",
          component: ManegecustomerComponent
        }
      ]
    }
]
