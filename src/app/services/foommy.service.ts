
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable, Subscriber } from 'rxjs';
import { of } from 'rxjs';
// import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class FoommyService {
  // recipesCollection: AngularFirestoreCollection<Recipe>;
  // recipes: Observable<Recipe[]>;
  // recipeByID: Observable<Recipe>;
  // recipeDocument: AngularFirestoreDocument<Recipe>;
  constructor(public db: AngularFirestore) { }


  // TEST ONLY
  fbTest() {
    return this.db
    .collection('test')
    .snapshotChanges();
  }

  // ----------------------GET ALL FOOMMIES---------------------
  getAllFoommies(){
    return this.db.collection('foommies').snapshotChanges();
  }

  // ----------------------GET FOOMMY BY ID---------------------
  getFoommyByID(id){
    return this.db.doc(`foommies/${id}`).snapshotChanges();
  }
}
