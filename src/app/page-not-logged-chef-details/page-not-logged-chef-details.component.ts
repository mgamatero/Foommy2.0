import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NonLoggedOnDataService} from '../services/non-logged-on-data.service';

@Component({
  selector: 'app-page-not-logged-chef-details',
  templateUrl: './page-not-logged-chef-details.component.html',
  styleUrls: ['./page-not-logged-chef-details.component.css']
})
export class PageNotLoggedChefDetailsComponent implements OnInit {
tempChefId:string;
tempchefInfo:any;
  constructor(private route: ActivatedRoute, private router: Router, private tempData: NonLoggedOnDataService) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tempChefId = params.get("id");
          });
this.tempchefInfo = this.tempData.getNonLoggedOnDataByID(this.tempChefId)
console.log(this.tempchefInfo)
   }

  ngOnInit(): void {
  }

}
