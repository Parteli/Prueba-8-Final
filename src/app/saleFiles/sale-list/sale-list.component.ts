import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  sales: Observable<Sale[]> = new Observable<Sale[]>();
  total: number = 0;

  constructor(private saleService: SaleService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  deleteSale(id: number) :void{
    this.saleService.deleteSale(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  reloadData():void {
    this.sales = this.saleService.getSalesList();
  }

  saleDetails(id: number):void{
    this.router.navigate(['sale/details', id]);
  }
  createSale(){
    this.router.navigate(['sale/add']);
  }
}
