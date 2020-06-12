import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NonLoggedOnDataService } from '../services/non-logged-on-data.service';
import {CardModule} from 'primeng/card';
import { FoommyInfo } from '../models/foommyinfo';
import { FoommyService } from '../services/foommy.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-foommy-details',
  templateUrl: './page-foommy-details.component.html',
  styleUrls: ['./page-foommy-details.component.css'],
})
export class PageFoommyDetailsComponent implements OnInit {
  foommyID: string;
foommyInfo$: FoommyInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foommyService: FoommyService
  ) {
    //GET FOOMMY ID
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.foommyID = params.get('id');
    });





   //GET 1 FOOMMY PER ID ===> Code dies here
    this.foommyService.getFoommyByID(this.foommyID).subscribe(data=>{
      this.foommyInfo$ = data.payload.data() as FoommyInfo;
    })





    //Dish data here - CHEAT for now.  Hardcoded in Service
    // this.tempDishInfo = this.tempData.getAllDishesByChefID(this.tempChefId);
    // console.log('tempDishInfo - ', this.tempDishInfo);

     }

  ngOnInit(): void {}

  clickNonLoggedDishCard(_chefId, _dishId){
    this.router.navigate([`dishDetails/${_chefId}/${_dishId}`]);
  }

}
