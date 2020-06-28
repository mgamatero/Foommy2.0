import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NonLoggedOnDataService } from '../services/non-logged-on-data.service';
import { CardModule } from 'primeng/card';
import { ChefModel } from '../models/chefModel';
import { DishModel } from '../models/dishModel';
import { FoommyService } from '../services/foommy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foommy-details',
  templateUrl: './page-foommy-details.component.html',
  styleUrls: ['./page-foommy-details.component.css'],
})
export class PageFoommyDetailsComponent implements OnInit {
  chefID: string;
  chefInfo$: ChefModel;
  dishes$: DishModel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foommyService: FoommyService
  ) {
    //GET FOOMMY ID
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.chefID = params.get('id');
    });

    //GET 1 FOOMMY PER ID ===> Code dies here
    this.foommyService.getFoommyByID(this.chefID).subscribe((data) => {
      this.chefInfo$ = data.payload.data() as ChefModel;
    });


    this.foommyService.getAllDishes().subscribe((dishes) => {
      var allDishes = dishes.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as DishModel),
        } as DishModel;
      });

      //return only the dishes that the chef owns
      this.dishes$ = allDishes.filter(chefDishes=>{
        return chefDishes.chefOwnerID === this.chefID
      })
    });
  }

  ngOnInit(): void {}

  clickDishCard(_chefId, _dishId) {
    this.router.navigate([`dishDetails/${_chefId}/${_dishId}`]);
  }
}
