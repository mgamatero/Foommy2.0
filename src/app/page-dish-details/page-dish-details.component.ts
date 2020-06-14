import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NonLoggedOnDataService } from '../services/non-logged-on-data.service';
import { FoommyService } from '../services/foommy.service';
import { ChefModel } from '../models/chefModel';
import { DishModel } from '../models/dishModel';
import { Observable } from 'rxjs';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-page-not-logged-dish-details',
  templateUrl: './page-dish-details.component.html',
  styleUrls: ['./page-dish-details.component.css'],
})
export class PageDishDetailsComponent implements OnInit {
  chefID: string;
  dishID: string;
  chefInfo$: ChefModel;
  dishInfo$: DishModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tempData: NonLoggedOnDataService,
    private foommyService: FoommyService
  ) {
    //Chef and Dish IDs here
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.chefID = params.get('chefId');
      this.dishID = params.get('dishId');
    });

    //Retrieve Chef Info
    this.foommyService.getFoommyByID(this.chefID).subscribe((data) => {
      this.chefInfo$ = data.payload.data() as ChefModel;
    });

    //Retrieve Dish Info
    this.foommyService.getDishByID(this.dishID).subscribe((data) => {
      this.dishInfo$ = data.payload.data() as DishModel;
    });


  }



  ngOnInit(): void {}

  clickNonLoggedChefCard(id) {
    this.router.navigate(['nonLoggedChefDetails/', id]);
  }
}
