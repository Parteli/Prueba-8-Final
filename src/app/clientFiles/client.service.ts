import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/prueba8/api/v1/clients';

  constructor(private http:HttpClient ) 
  {
  }
    
  getClient(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createClient(client: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, client);
  }

  updateClient(dni: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${dni}`, value);
  }

  deleteClient(dni: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${dni}`, { responseType: 'text' });
  }

  getClientsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  
}
