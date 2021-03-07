import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/generalFiles/cart.service';
import { Client } from '../client';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Observable<Client[]> = new Observable<Client[]>();
  cartService: CartService;

  constructor(private clientService: ClientService, cartService: CartService, private router: Router) 
  {
    this.cartService = cartService;
  }

  ngOnInit () :void {
    this.reloadData();
  }

  reloadData():void {
    this.clients = this.clientService.getClientsList();
  }

  deleteClient(dni: string):void {
    this.clientService.deleteClient(dni)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clientDetails(dni: string):void{
    this.router.navigate(['client/details', dni]);
  }

  updateClient(dni: string)
  {
    this.router.navigate(['client/update', dni]);
  }
  createClient()
  {
    this.router.navigate(['client/add']);
  }

  toCart(dni: string)
  {
    this.clientService.getClient(dni).subscribe(c=> this.cartService.client =c);
    this.router.navigate(['cart']);
  }
}
