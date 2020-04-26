import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
// import { Recipe } from '../models/recipe';
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
  constructor(public afs: AngularFirestore) { }

  fbTest() {
    return this.afs
    .collection('recipes', (ref) => ref.orderBy('name'))
    .snapshotChanges();
  }
}
