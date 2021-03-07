import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  pet: Pet = new Pet();
  submitted = false;

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() { this.submitted = false;
  }

  save() {
    this.petService
    .createPet(this.pet).subscribe(data => {
      console.log(data)
      this.pet = new Pet();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    if(this.submitted) return;
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['pet/list']);
  }

}
