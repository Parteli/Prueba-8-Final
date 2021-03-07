import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private baseUrl = 'http://localhost:8080/prueba8/api/v1/sales';

  constructor(private http: HttpClient) { }

  getSale(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSale(sale: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sale);
  }

  deleteSale(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSalesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
