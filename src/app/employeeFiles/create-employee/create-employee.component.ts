import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.employee = new Employee();
  }

  save() {
    
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      this.employee = new Employee();
    });
  }
  reload(){window.location.reload();}

  onSubmit() {
    this.save();   
    this.gotoList(); 
  }

  gotoList() {
    this.router.navigate(['employee/list']);
  }
}