import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/generalFiles/cart.service';

@Component({
  selector: 'app-admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.css']
})
export class AdminTopBarComponent implements OnInit {


  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
  }

  petList(){
    this.router.navigate(['pet/list']);
  }
  clientList(){
    this.router.navigate(['client/list']);
  }
  employeeList(){
    this.router.navigate(['employee/list']);
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
