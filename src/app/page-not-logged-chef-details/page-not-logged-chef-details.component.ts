import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NonLoggedOnDataService } from '../services/non-logged-on-data.service';

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

    //Dish data here
    this.tempDishInfo = this.tempData.getNonLoggedOnDishesByID(this.tempChefId);
    console.log('tempDishInfo - ', this.tempDishInfo);
    // console.log('tempDishInfo - ');
     }

  ngOnInit(): void {}
}
