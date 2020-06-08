import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NonLoggedOnDataService } from '../services/non-logged-on-data.service';
import {CardModule} from 'primeng/card';


@Component({
  selector: 'app-page-not-logged-chef-details',
  templateUrl: './page-not-logged-chef-details.component.html',
  styleUrls: ['./page-not-logged-chef-details.component.css'],
})
export class PageNotLoggedChefDetailsComponent implements OnInit {
  tempChefId: string;
  tempChefInfo: any;

  tempDishId: string;
  tempDishInfo: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tempData: NonLoggedOnDataService
  ) {
    //Chef data here
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tempChefId = params.get('id');
    });

    this.tempChefInfo = this.tempData.getNonLoggedOnChefByID(
      this.tempChefId
    )[0];
    console.log(this.tempChefInfo);

    //Dish data here - CHEAT for now.  Hardcoded in Service
    this.tempDishInfo = this.tempData.getAllDishesByChefID(this.tempChefId);
    console.log('tempDishInfo - ', this.tempDishInfo);

     }

  ngOnInit(): void {}

  clickNonLoggedDishCard(_chefId, _dishId){
    this.router.navigate([`nonLoggedDishDetails/${_chefId}/${_dishId}`]);
  }

}
