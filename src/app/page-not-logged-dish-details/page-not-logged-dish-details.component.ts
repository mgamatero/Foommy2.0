import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NonLoggedOnDataService } from '../services/non-logged-on-data.service';

@Component({
  selector: 'app-page-not-logged-dish-details',
  templateUrl: './page-not-logged-dish-details.component.html',
  styleUrls: ['./page-not-logged-dish-details.component.css']
})
export class PageNotLoggedDishDetailsComponent implements OnInit {
tempChefId:string;
tempDishId:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tempData: NonLoggedOnDataService
  ) {

//Chef data here
this.route.paramMap.subscribe((params: ParamMap) => {
  this.tempChefId = params.get('chefId');
  this.tempDishId = params.get('dishId');
});

  }

  ngOnInit(): void {
  }

  clickNonLoggedChefCard(id){
    this.router.navigate(['nonLoggedChefDetails/', id]);
  }
}
