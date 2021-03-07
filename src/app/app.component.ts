import { Component } from '@angular/core';
import { CartService } from './generalFiles/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba8';

  cartService: CartService;

  constructor(cartService:CartService)
  {
    this.cartService = cartService;
  }


}
