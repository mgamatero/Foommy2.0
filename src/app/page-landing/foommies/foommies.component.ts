import { Component, OnInit } from '@angular/core';
// import { FoommyService} from '../services/foommy.service';
import { FoommyService } from 'src/app/services/foommy.service';
import { FoommyInfo } from '../../models/foommyinfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foommies',
  templateUrl: './foommies.component.html',
  styleUrls: ['./foommies.component.css'],
})
export class FoommiesComponent implements OnInit {
  testFB: any[];
  foommies: FoommyInfo[];
  constructor(private foomyService: FoommyService, private router:Router) {}

  ngOnInit(): void {

    // ------------------------- TEST CONNECTION -----------------------
    // this.afs.fbTest().subscribe((data)=>{
    //   this.testFB = data.map((e) => {
    //     // console.log(data[1].payload.doc.id)
    //     return {
    //       id: e.payload.doc.id,
    //       ...(e.payload.doc.data() as any),
    //     } as any;
    //   });
    // })
    // console.log(this.testFB)

    this.foomyService.getAllFoommies().subscribe((data) => {
      this.foommies = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as FoommyInfo),
        } as FoommyInfo;
      });
    });
  }

  clickFoommyCard(id){
console.log('Foommy ID is --- ', id)
this.router.navigate(['foommyDetails/', id]);
  }
}
