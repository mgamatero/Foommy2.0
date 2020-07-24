import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserObjService } from '../services/user-obj.service';
import { Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

currentUser: any;
user$: Observable<any>;


  constructor(public auth: AuthService,
              public userService: UserObjService,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore)
    {}

  ngOnInit(): void {


    this.afAuth.onAuthStateChanged(user => {

      this.currentUser = user;

      console.log({user});
      if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...


        const docRef = this.db.collection('users').doc(user.uid);

        docRef.get().subscribe(doc => {
            if (doc.exists) {
                console.log(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log('No such document!');
            }
        });
      } else {
        // User is signed out.
        // ...
      }
    });


  }

  logOut(){
    this.auth.emailLogout();
  }
}
