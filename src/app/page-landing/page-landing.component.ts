import { Component, OnInit } from '@angular/core';
import { FoommyService} from '../services/foommy.service';

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.css']
})
export class PageLandingComponent implements OnInit {
testFB : string;
  constructor( private afs:FoommyService) { }

  ngOnInit(): void {
    this.afs.fbTest().subscribe((data)=>{
this.testFB = data as any;
    })
  }

}
