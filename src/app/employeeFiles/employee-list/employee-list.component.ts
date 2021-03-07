import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]> = new Observable<Employee[]>();

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit () :void {
    this.reloadData();
  }

  reloadData():void {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: string):void {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEmployee(id: string)
  {
    this.router.navigate(['employee/update', id]);
  }
  createEmployee()
  {
    this.router.navigate(['employee/add']);
  }

  employeeDetails(id: string):void{
    this.router.navigate(['employee/details', id]);
  }
}