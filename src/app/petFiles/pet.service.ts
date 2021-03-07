import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseUrl = 'http://localhost:8080/prueba8/api/v1/pets';

  constructor(private http: HttpClient)
  {
  }

  getPet(id: number) {
    return this.http.get<Pet>(`${this.baseUrl}/${id}`);
  }

  createPet(pet: Object){
    return this.http.post<Pet>(`${this.baseUrl}`, pet);
  }

  updatePet(id: number, value: any) {
    return this.http.put<Pet>(`${this.baseUrl}/${id}`, value);
  }

  deletePet(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPetsList(){
    return this.http.get<Pet[]>(`${this.baseUrl}`);
  }

  getPetsArrayList( sold: boolean) : Array<Pet>
  {
    let pets = new Array<Pet>();
    this.getPetsList().subscribe(
      list => {
        list.forEach(element => {
          if(sold == element.sold) pets.push(element);
        });
      }
    );

    return pets;
  }
}
