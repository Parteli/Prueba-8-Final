import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../employeeFiles/employee';
import { EmployeeService } from '../../employeeFiles/employee.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  cartService: CartService;
  employee: Employee;

  constructor(private employeeService: EmployeeService,cartService: CartService, private router:Router)
  {
    this.cartService = cartService;
    this.employee = new Employee();

    this.checkAdmin();
  }

  onSubmit()
  {
    let pwd = this.employee.password;
      this.employeeService.getEmployee( this.employee.id )
        .subscribe(e => { this.employee = e } );
        

      if(this.employee.id=="")
      {
        this.employee.id = "error";
      }
      else if(pwd == this.employee.password)
      {
        this.cartService.employee = this.employee;
        this.router.navigate(['cart']);
      }
  }

  private checkAdmin()
  {
    let adm:Employee = new Employee();
    this.employeeService.getAdministrator()
      .subscribe(e => { adm = e } );

    if (adm.id == "")
    {
      adm.admin = true;
      adm.id = "admin";
      adm.name = "Change data";
      adm.password = "admin123";
      adm.phone = ""
      adm.surname = "";
      this.employeeService.createEmployee(adm).subscribe(data => {
        console.log(data)
      }, 
      error => console.log(error));
    }
  }
}
