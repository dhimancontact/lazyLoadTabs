import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


const environment = {
  apiKey: "AIzaSyAR8qLMbL6GLMupNgJgNXrVn2EJGwQ0oSk",
  authDomain: "businesscontacts-ea3da.firebaseapp.com",
  databaseURL: "https://businesscontacts-ea3da.firebaseio.com",
  projectId: "businesscontacts-ea3da",
  storageBucket: "businesscontacts-ea3da.appspot.com",
  messagingSenderId: "782539614499"
};

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment),
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
