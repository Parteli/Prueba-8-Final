import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/generalFiles/cart.service';

@Component({
  selector: 'app-normal-top-bar',
  templateUrl: './normal-top-bar.component.html',
  styleUrls: ['./normal-top-bar.component.css']
})
export class NormalTopBarComponent implements OnInit {
 
  cartService:CartService

  constructor(cartService:CartService, private router:Router) 
  {
    this.cartService = cartService;
   }

  ngOnInit(): void {
  }

  petList(){
    this.router.navigate(['pet/list']);
  }
  clientList(){
    this.router.navigate(['client/list']);
  }
  saleList(){
    this.router.navigate(['sale/list']);
  }
  cart(){
    this.router.navigate(['cart']);
  }


  logout()
  {
    this.cartService.employee = undefined;
    this.router.navigate(['login']);
  }
}
