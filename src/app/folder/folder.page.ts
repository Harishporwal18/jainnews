import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { HTTP } from "@ionic-native/http/ngx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
//import { DataService } from "../data.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireStorage } from "@angular/fire/storage";
//import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from "firebase/app";
import "firebase/storage";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  public folder: string;
  @ViewChild("slideWithNav", { static: false }) slideWithNav: IonSlides;
  sliderOne: any;
  slideOptsOne = {
    loop: false,
    direction: "vertical",
  };
  headers: any;
  films: any;
  someTextUrl: any;
  downloadURL: any;
  //userRegistrationList: UserRegistration[];
  data = [
    {
      id: "1",
      name: "Clinical Depression",
      image: "http://megapackaging.unaux.com/stavan/banner1.jpg",
      shortdesc: "Depression is a Major disease which goes unknown",
      desc:
        "<p>We at <b>Trogo Digital</b> design and develop full-fledged mobile applications to implement different ideas for app users. We tend to design the most actionable mobile apps to fit in vary of categories.We are trying to be part of your lifestyle and let you rely on ourproducts and address all the important issues in your life. Our appswill intent to change the definiton of your everyday activity.</p>",
    },
    {
      id: "2",
      name: "Anxiety Disorder",
      image: "assets/img/banner1.jpg",
      shortdesc: "Depression is a Major disease which goes unknown",
      desc:
        "<p>We at <b>Trogo Digital</b> design and develop full-fledged mobile applications to implement different ideas for app users. We tend to design the most actionable mobile apps to fit in vary of categories.We are trying to be part of your lifestyle and let you rely on ourproducts and address all the important issues in your life. Our appswill intent to change the definiton of your everyday activity.</p>",
    },
    {
      id: "3",
      name: "Bipolar Disorder",
      image: "assets/img/banner5.jpg",
      desc:
        "<p>We at <b>Trogo Digital</b> design and develop full-fledged mobile applications to implement different ideas for app users. We tend to design the most actionable mobile apps to fit in vary of categories.We are trying to be part of your lifestyle and let you rely on ourproducts and address all the important issues in your life. Our appswill intent to change the definiton of your everyday activity.</p>",
    },
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpclient: HttpClient,
    private http: HTTP,
    private af2: AngularFireStorage
  ) {
    /* this.httpclient
      .get(
        "https://firebasestorage.googleapis.com/v0/b/news-17933.appspot.com/o/data.json?alt=media&token=1c07131f-fa01-46f7-b689-ed068ed8f98b"
      )
      .subscribe(
        (data) => {
          alert("httpclient" + data);
        },
        (err) => {
          alert("httpclienteeror " + JSON.stringify(err));
        }
      );
    this.getData();*/
  }
  async getData() {
    try {
      const url = "https://api.jsonbin.io/b/5f1c461f918061662848abb9";
      const params = {};
      const headers = {
        "Content-Type": "application/json",
        "secret-key":
          "$2b$10$f7ifEs/34xjQxA2U3k19SOVlBR1SitbZg8sSD665aw82M8ORS.zZy",
      };

      const response = await this.http.get(url, params, headers);

      alert(JSON.stringify(response));
      // console.log(JSON.parse(response)); // JSON data returned by server
      console.log(response);
    } catch (error) {
      alert(JSON.stringify(error));
      console.error(error); // Error message as string
    }
  }

  ngOnInit() {
    /*   this.folder = this.activatedRoute.snapshot.paramMap.get("id");
    const images = firebase
      .storage()
      .refFromURL("gs://news-17933.appspot.com/data.json");
    alert(images.getDownloadURL());
   this.dataService.getUserList().subscribe((data1) => {
      console.log(data1);

      /* this.data = data1.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
    });*/
  }

  /* this.dataService.getUserList().subscribe((res) => {
      this.userRegistrationList = res;
      console.log(this.userRegistrationList);
    });*/
}
