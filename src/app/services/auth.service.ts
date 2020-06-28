import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
currentUserInfo:any;



  constructor(private afAuth: AngularFireAuth) {

    //extra step just so i can get currentUserInfo properties?
    afAuth.onAuthStateChanged(user=>{
      if (user) {
         this.currentUserInfo = user;
      }
    })
  }

  emailLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => {
          resolve(userData);
          console.log(userData);
          console.log(userData.user.email);
          this.userEmail = userData.user.email;
        },
        (err) => reject(err)
      );
    });
  }

  emailSignUp(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (userData) => {
          resolve(userData);
          console.log(userData.user.email);
          this.userEmail = userData.user.email;
        },
        (err) => reject(err)
      );
    });
  }

  emailLogout() {
    this.afAuth.signOut();
  }

  isLogged() {
    return this.afAuth.authState;
  }

  googleLogin() {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
        (userData) => {
          resolve(userData);
          console.log(userData);
        },
        (err) => reject(err)
      );
    });
  }
}
