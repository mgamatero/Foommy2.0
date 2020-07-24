import { Injectable } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';

import {map, first} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserInfo: any;
  loggedInUser$: Observable<User>;


  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore) {}

  emailLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => {
          resolve(userData);
          this.currentUserInfo = userData;

        },
        (err) => reject(err)
      );
    });
  }

  emailSignUp(email: string, password: string,) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (userData) => {
          resolve(userData);
          console.log(userData.user);
          const item = {
            uid: userData.user.uid,
            email: userData.user.email
          };
          localStorage.setItem('uid', userData.user.uid);

          this.currentUserInfo = item;

        },
        (err) => reject(err)
      );
    });
  }


  emailLogout() {
    this.afAuth.signOut();
  }


  isLoggedIn() {
    return this.afAuth.authState.pipe(first());
 }


  getCurrentUser(){

    const userId = localStorage.getItem('uid');
    this.loggedInUser$ = this.afAuth.authState.pipe(first());
    return this.loggedInUser$;
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
