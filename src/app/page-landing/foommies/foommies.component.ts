import { Component, OnInit } from '@angular/core';
import { ChefModel } from '../../models/chefModel';
import { Router } from '@angular/router';
import { FoommyService } from '../../services/foommy.service';

@Component({
  selector: 'app-foommies',
  templateUrl: './foommies.component.html',
  styleUrls: ['./foommies.component.css'],
})
export class FoommiesComponent implements OnInit {
  testFB: any[];
  chefs: ChefModel[];
  constructor(private foomyService: FoommyService, private router:Router) {}

  ngOnInit(): void {

    this.foomyService.getAllFoommies().subscribe((data) => {
      this.chefs = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as ChefModel),
        } as ChefModel;
      });
    });
  }

  clickFoommyCard(id){
console.log('Foommy ID is --- ', id)
this.router.navigate(['foommyDetails/', id]);
  }
}
