import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(){
    this.navCtrl.push('Detail');
  }

  showLoginPage() {
    this.navCtrl.push('LoginPage');
  }

  showRegisterationPage() {
    this.navCtrl.push('RegisterPage');
  }
}
