import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any>;

  constructor(private firestore: AngularFirestore) {
    this.itemCollection = firestore.collection<any>('sweets');
    this.items = this.itemCollection.valueChanges();
  }

  



}
