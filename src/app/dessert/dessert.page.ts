import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.page.html',
  styleUrls: ['./dessert.page.scss'],
})
export class DessertPage implements OnInit {

  itemCollection: AngularFirestoreDocument<any>;
  items: any;
  id: string;

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.itemCollection = firestore.doc<any>('sweets/' + this.id);
    this.items = this.itemCollection.valueChanges();
    console.log(this.items)
  }
  db_name: string;
  db_numid: string;
  db_work: string;

  ngOnInit() {
    this.items.subscribe((data: any) => {
      this.db_name = data.name;
      this.db_numid = data.id;
      console.log(data)
    })
  }

}
