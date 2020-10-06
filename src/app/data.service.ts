import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { StatusBar } from "@ionic-native/status-bar/ngx";
export interface NewsModel {
  id?: string;
  title: string;
  desc: string;
  link: string;
  image: string;
  status: string;
  createdAt: number;
}
@Injectable({
  providedIn: "root",
})
export class DataService {
  private newsCollection: AngularFirestoreCollection<NewsModel>;
  private newsList: Observable<NewsModel[]>;
  constructor(db: AngularFirestore) {
    this.newsCollection = db.collection<NewsModel>("News");

    this.newsList = this.newsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getNewsList() {
    return this.newsList;
  }
}
