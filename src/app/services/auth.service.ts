import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
currentUserInfo:any;
uid;



  constructor(private afAuth: AngularFireAuth) {

    //extra step just so i can get currentUserInfo properties?
    afAuth.onAuthStateChanged(user=>{
      if (user) {
         this.currentUserInfo = user;
         this.uid = user.uid;
      }
    })
  }

  emailLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => {
          resolve(userData);
          this.currentUserInfo = userData;
          this.uid = userData.user.uid;
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
          console.log(userData.user.uid);

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
getCurrentUser(){
  return this.afAuth.currentUser;
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
