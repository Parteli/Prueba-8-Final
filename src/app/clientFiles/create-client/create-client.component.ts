import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/generalFiles/cart.service';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  public client: Client = new Client();
  toCart:boolean = false;

  constructor(private clientService: ClientService, private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
  }

  newClient(): void {
    this.client = new Client();
  }

  save() {
    this.clientService
    .createClient(this.client).subscribe(data => {
      console.log(data);
    }, 
    error => console.log(error));
  }

  onSubmit()
  {
    this.save(); 

    if(this.toCart)
    {
      this.cartService.client = this.client;
      this.gotoCart();
    }
    else
    {
      this.gotoList();
    }  
    this.client = new Client();
  }

  gotoList() {
    this.router.navigate(['client/list']);
  }
  gotoCart() {
    this.router.navigate(['cart']);
  }
}
