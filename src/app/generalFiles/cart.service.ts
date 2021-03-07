import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../clientFiles/client';
import { Employee } from '../employeeFiles/employee';
import { Pet } from '../petFiles/pet';
import { PetService } from '../petFiles/pet.service';
import { Sale } from '../saleFiles/sale';
import { SaleService } from '../saleFiles/sale.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  employee?: Employee;
  pets:Array<Pet>;
  client?: Client;
  totalPrice:number = 0;

  constructor(private saleService: SaleService, private petService: PetService)
  {
    this.pets = new Array<Pet>();
  }

  setEmployee(emp:Employee)
  {
    this.employee = emp;
  }

  addToCart( pet:Pet) {

    if( !this.pets.find( e => e.id == pet.id ) )
    { 
      this.pets.push(pet);
      this.calculatePrice();
    }
  }

  finishSale()
  {
    for(let i:number = 0; i < this.pets.length; i++)
    {
      let sale: Sale = new Sale();
      if(this.employee != undefined) sale.employee = this.employee.id;
      if(this.client != undefined) sale.client = this.client.dni;
      sale.pet = this.pets[i].id;
      this.saleService.createSale(sale).subscribe();
      this.pets[i].sold = true;
        this.petService.updatePet(this.pets[i].id, this.pets[i]).subscribe();
    }
    this.pets = new Array<Pet>();
    this.client = undefined;
    this.totalPrice = 0;
  }

  removeFromCart(pet:Pet) {
    this.pets.forEach((element,index)=>{
      if(pet === element)
      { 
        this.pets.splice(index,1);
        this.calculatePrice();
      }
   });
  }

  calculatePrice()
  {
    this.totalPrice = 0;
    this.pets.forEach(element => {
      this.totalPrice += element.price;
    });
  }

  getItems() : Array<Pet> {
    return this.pets;
  }


  isAdmin(): boolean | null
  {
    if(this.employee == null) return null;
    else return this.employee.admin;
  }

  hasClient(): boolean
  {
    return this.client!=null;
  }
}
