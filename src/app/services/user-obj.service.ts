import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable, Subscriber } from 'rxjs';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserObjService {
  constructor(private db: AngularFirestore, private afs: AuthService) {}

  // ---------------------CREATE USER OBJECT with ID--------------------
  createUserObject(id, email, firstName, lastName, isChef) {
    this.db
      .collection('users')
      .doc(id)
      .set({
        email,
        firstName,
        lastName,
        isChef,
      })
      .then(() => {
        window.alert(`User ${id} added to user document`);
      });
  }

  // ----------------------GET USER OBJECT BY ID---------------------
  getUserObjectByID(id) {
    return this.db.doc(`users/${id}`).snapshotChanges();
  }
}
