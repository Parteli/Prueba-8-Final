import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  pet: Pet = new Pet();

  constructor(private route: ActivatedRoute,private router: Router,
    private petService: PetService) { }

  ngOnInit() {
    this.pet = new Pet();

    let id = this.route.snapshot.params['petId'];
    
    this.petService.getPet(id)
      .subscribe(data => {
        console.log(data)
        this.pet = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['pet/list']);
  }

}
