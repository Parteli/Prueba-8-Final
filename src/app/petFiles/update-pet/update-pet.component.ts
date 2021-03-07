import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {

  id: number = 0;
  pet: Pet = new Pet();

  constructor(private route: ActivatedRoute,private router: Router,
    private petService: PetService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['petId'];
    
    this.petService.getPet(this.id)
      .subscribe(data => {
        console.log(data)
        this.pet = data;
      }, error => console.log(error));
  }

  updatePet() {
    this.petService.updatePet(this.id, this.pet)
      .subscribe(data => {
        console.log(data);
        this.pet = new Pet();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updatePet();    
  }

  gotoList() {
    this.router.navigate(['pet/list']);
  }

}
