import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserObjService } from '../services/user-obj.service';
import { Observable} from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
loggedIn:boolean;
chefOrNot:boolean;
currentUserInfo$:any;


  constructor(public auth:AuthService,
              public userObjService$:UserObjService)
    {
      console.log('uid'+ this.auth.uid)
    //CODE DIES HERE  --  cant get uid???
      // Why is uid present in the auth service, but i cannot 'pass' it here?
      // Also, why can't I subscribe to it?


    // this.userObjService$.getUserObjectByID(NEED UID HERE).subscribe((data) => {
    //   this.currentUserInfo$ = data.payload.data() as any;
    // });
    }

  ngOnInit(): void {
    this.auth.isLogged().subscribe(status=>this.loggedIn = status as any)



   }

  logOut(){
    this.auth.emailLogout();
  }
}
