import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employeeFiles/employee';
import { CartService } from 'src/app/generalFiles/cart.service';

@Component({
  selector: 'app-debug-top-bar',
  templateUrl: './debug-top-bar.component.html',
  styleUrls: ['./debug-top-bar.component.css']
})
export class DebugTopBarComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  setNormalUser(){
    let emp: Employee = new Employee();
    emp.admin = false;
    emp.id = "empDebug";
    this.cartService.employee = emp;
  }
  setAdminUser(){
    let emp: Employee = new Employee();
    emp.admin = true;
    emp.id = "admin";
    this.cartService.employee = emp;
  }
}
