import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/clientFiles/client.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartService:CartService;
  dni: string ="";

  constructor(cartService:CartService, private clientService: ClientService, private router:Router) 
  { 
    this.cartService = cartService;
  }

  ngOnInit(): void {
  }


  findClient()
  {
    if(this.dni == "") return;
    this.clientService.getClient(this.dni).subscribe(
      c => this.cartService.client = c
    );
  }

  createClient():void{
    this.router.navigate(['client/add']);
  }

  addPet():void{
    this.router.navigate(['pet/list']);
  }

  clearClient()
  {
    this.cartService.client = undefined;
  }

  finishSale()
  {
    this.cartService.finishSale();
  }
}
