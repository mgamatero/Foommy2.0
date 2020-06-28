import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
loggedIn:boolean;
emailName:string;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.isLogged().subscribe(status=>this.loggedIn = status as any)
   }

  logOut(){
    this.auth.emailLogout();
  }
}
