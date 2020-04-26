import { Component, OnInit } from '@angular/core';
import { FoommyService} from '../services/foommy.service';

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.css']
})
export class PageLandingComponent implements OnInit {
testFB: any [];
  constructor( private afs:FoommyService) { }

  ngOnInit(): void {
    this.afs.fbTest().subscribe((data)=>{
      this.testFB = data.map((e) => {
        console.log(data[1].payload.doc.id)
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as any),
        } as any;
      });
    })
    // console.log(this.testFB)
  }

}
