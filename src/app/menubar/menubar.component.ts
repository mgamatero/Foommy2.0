import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
logInStatus:boolean;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.isLogged().subscribe(status=>this.logInStatus = status as any)
  }

  logOut(){
    this.auth.emailLogout();
  }
}
