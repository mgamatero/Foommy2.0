import { Component, OnInit } from '@angular/core';
// import { FoommyService} from '../services/foommy.service';
import { FoommyService } from 'src/app/services/foommy.service';

@Component({
  selector: 'app-foommies',
  templateUrl: './foommies.component.html',
  styleUrls: ['./foommies.component.css']
})
export class FoommiesComponent implements OnInit {
  testFB: any [];
  constructor(private afs:FoommyService) { }

  ngOnInit(): void {
    this.afs.fbTest().subscribe((data)=>{
      this.testFB = data.map((e) => {
        // console.log(data[1].payload.doc.id)
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as any),
        } as any;
      });
    })
    // console.log(this.testFB)
  }

}
