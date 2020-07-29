import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable, Subscriber } from 'rxjs';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import{ ChefModel } from  '../models/chefModel';

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

  // ---------------------ADD FOOMMY DETAILS ---------------------------
  /*  --- use this!!!!
   this.ulamForm = this.formBuilder.group({
      ulamName: [''],
      ulamImage: [''],
      ulamPrice: [''],
      ulamSize: [''],
      soldOut:[false]
    });
     }

  clearForms(){
    this.ulamForm.reset();
  }

  addFromForm(){
    this.dbService.addUlam(this.ulamForm.value);
    this.ulamForm.reset();
  }*/
  addChefDetails(id, isChef=true) {
    this.db
      .collection('users')
      .doc(id)
      .set({
        isChef
  //       foommyImage: string;
  // chefName: string;
  // aboutKitchen: string;
  // placeDesc: string;
  // theDiningArea: string;
  // additionalInfo: string;
  // availableDays: string;
  // availableTimes: string;
  // contactEmail: string;
  // contactPhone: string;
  // city: string;
  // state: string;
  // howToGetThere: string;
  // diningOptions: string[];
  // paymentMethod: string[];
  // availability: string;
  // seatingCapacity: string;
  // advanceReservation: string;
  // prepTime: string;
  // cuisineType: string;
      })
      .then(() => {
        window.alert(`User ${id} added to user document`);
      });
  }
}
