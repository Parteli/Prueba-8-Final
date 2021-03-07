import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/prueba8/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: string) {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: string, value: Object) {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList() {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  getAdministrator()
  {
    return this.http.get<Employee>(`${this.baseUrl}/admin`);
  }
}