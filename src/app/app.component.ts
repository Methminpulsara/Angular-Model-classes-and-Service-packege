import { LoginComponent } from "./page/login/login.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports : [RouterOutlet , LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
