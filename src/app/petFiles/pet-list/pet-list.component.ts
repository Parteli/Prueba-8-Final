import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/generalFiles/cart.service';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  cartService: CartService;
  petArray:Array<Pet>;
  searchText:string = "";
  sold:boolean = false;
  upDown:boolean = false;

  constructor(private petService: PetService, private router:Router, cartService: CartService)
  {
    this.cartService = cartService;
    this.petArray = new Array<Pet>();
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData():void {
    this.petArray = this.petService.getPetsArrayList(this.sold);
  }

  deletePet(id: number) :void{
    this.petService.deletePet(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  petDetails(id: number):void{
    this.router.navigate(['pet/details', id]);
  }
  updatePet(id: number):void{
    this.router.navigate(['pet/update', id]);
  }

  createPet():void{
    this.router.navigate(['pet/add']);
  }

  addToCart(id:number)
  {
    this.petService.getPet(id).subscribe( p => {this.cartService.addToCart(p);} );
    this.router.navigate(['cart']);
  }

  notOnCart(index:number):boolean
  {
    return !this.cartService.pets.find( e=> e.id == this.petArray[index].id );
  }

  sortById()
  {
    if(this.upDown) this.petArray.sort((a,b) => a.id - b.id );
    else this.petArray.sort( (a,b) => b.id - a.id );

    this.upDown = !this.upDown;
  }

  sortByName()
  {
    if(this.upDown) this.petArray.sort((a,b) => a.name.localeCompare(b.name) );
    else this.petArray.sort( (a,b) => b.name.localeCompare(a.name) );

    this.upDown = !this.upDown;
  }

  sortByType()
  {
    if(this.upDown) this.petArray.sort((a,b) => a.type.localeCompare(b.type) );
    else this.petArray.sort( (a,b) => b.type.localeCompare(a.type) );

    this.upDown = !this.upDown;
  }

  sortByPrice()
  {
    if(this.upDown) this.petArray.sort((a,b) => a.price - b.price );
    else this.petArray.sort( (a,b) => b.price - a.price );

    this.upDown = !this.upDown;
  }

  search()
  {
    if(this.searchText == "")
    { 
      this.petArray = this.petArray;
      return;
    }
    let a: Array<Pet> = new Array<Pet>();
    this.searchText = this.searchText.toLowerCase();
    this.petArray.forEach(element => {
      if(element.id.toString().toLowerCase().includes(this.searchText) ||
        element.name.toLowerCase().includes(this.searchText) ||
        element.price.toString().toLowerCase().includes(this.searchText) ||
        element.type.toLowerCase().includes(this.searchText)  ) a.push(element);
    });
      
    this.petArray = a;
  }

  showSold()
  {
    this.sold = !this.sold;
    this.reloadData();
  }
  
}
