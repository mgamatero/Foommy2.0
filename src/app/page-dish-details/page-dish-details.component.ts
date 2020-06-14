import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NonLoggedOnDataService } from '../services/non-logged-on-data.service';

@Component({
  selector: 'app-page-not-logged-dish-details',
  templateUrl: './page-dish-details.component.html',
  styleUrls: ['./page-dish-details.component.css']
})
export class PageDishDetailsComponent implements OnInit {
tempChefId:string;
tempDishId:string;
tempChef:any;
tempDish:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tempData: NonLoggedOnDataService
  ) {

//Chef and Dish IDs here
this.route.paramMap.subscribe((params: ParamMap) => {
  this.tempChefId = params.get('chefId');
  this.tempDishId = params.get('dishId');
});

this.tempChef = this.tempData.getNonLoggedOnChefByID(
  this.tempChefId
)[0];


//Dish data here - CHEAT for now.  Hardcoded in Service
this.tempDish = this.tempData.getDishByDishID(this.tempDishId);
console.log(this.tempDish)
  }

  ngOnInit(): void {
  }

  clickNonLoggedChefCard(id){
    this.router.navigate(['nonLoggedChefDetails/', id]);
  }
}
