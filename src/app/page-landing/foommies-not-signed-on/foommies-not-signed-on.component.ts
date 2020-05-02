import { Component, OnInit } from '@angular/core';
import { NonLoggedOnDataService } from '../../services/non-logged-on-data.service';

@Component({
  selector: 'app-foommies-not-signed-on',
  templateUrl: './foommies-not-signed-on.component.html',
  styleUrls: ['./foommies-not-signed-on.component.css'],
})
export class FoommiesNotSignedOnComponent implements OnInit {
  tempData: any;
  constructor(private notLoggedOn: NonLoggedOnDataService) {}

  ngOnInit(): void {
    this.tempData = this.notLoggedOn.getNonLoggedOnData();
    console.log(this.tempData)
  }
}
