import { Component, OnInit } from "@angular/core";
import {
  NavController,
  LoadingController,
  Platform,
  ToastController,
} from "@ionic/angular";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"],
})
export class ListPage implements OnInit {
  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private datePipe: DatePipe
  ) {
    this.platform.ready().then(() => {});
  }

  ngOnInit() {
    //this.prepareAudioFile();
  }
}
