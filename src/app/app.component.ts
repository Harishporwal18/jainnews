import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { FCM } from "@ionic-native/fcm/ngx";
import { AlertController, ToastController } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Inbox",
      url: "/folder/Inbox",
      icon: "mail",
    },
    {
      title: "List",
      url: "list",
      icon: "paper-plane",
    },
    {
      title: "Favorites",
      url: "/folder/Favorites",
      icon: "heart",
    },
  ];
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    private fcm: FCM,
    public toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //alert("hi");
    if (this.platform.is("android") && this.platform.is("cordova")) {
      alert(JSON.stringify(this.fcm));
      this.notificationSetup();
    }
  }
  notificationSetup() {
    //alert("hnotif");
    this.fcm
      .getAPNSToken()
      .then((apns) => {
        alert("apns " + apns);
      })
      .catch((e) => {
        alert("error - apns " + e);
      });
    this.fcm
      .getToken()
      .then((token) => {
        alert("token " + token);
      })
      .catch((e) => {
        alert("error - token " + e);
      });
    this.fcm.subscribeToTopic("all");
    // ionic push notification example
    this.fcm.onNotification().subscribe((data) => {
      this.presentToast(data.body);
      if (data.wasTapped) {
        //this.router.navigate([data.page, data.id]);
        alert("Received in background");
      } else {
        alert("Received in foreground");
      }
    });
    // refresh the FCM token
    this.fcm.onTokenRefresh().subscribe((newtoken) => {
      alert("newtoken " + newtoken);
    });
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
    });
    toast.present();
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
