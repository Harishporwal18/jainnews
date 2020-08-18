import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { DatePipe } from "@angular/common";
import { environment } from "../environments/environment";
//import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
//import { AngularFireStorageModule } from "@angular/fire/storage";
//import { AngularFireModule } from "angularfire2";
//import { AngularFirestoreModule } from "angularfire2/firestore";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { HTTP } from "@ionic-native/http/ngx";
import { FCM } from "@ionic-native/fcm/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    HTTP,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
