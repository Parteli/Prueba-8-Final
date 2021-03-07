import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {

  sale: Sale = new Sale();
  submitted = false;

  constructor(private saleService: SaleService, private router: Router) { }

  ngOnInit() {
  }

  newPet(): void {
    this.submitted = false;
    this.sale = new Sale();
  }

  save() {
    this.saleService
    .createSale(this.sale).subscribe(data => {
      console.log(data)
      this.sale = new Sale();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['sale/list']);
  }

}
