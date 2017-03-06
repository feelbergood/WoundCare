import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsentPage } from '../consent/consent';
/*
  Generated class for the PatientList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-patient-list',
  templateUrl: 'patient-list.html'
})
export class PatientListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientListPage');
  }

  gotoConsent(){
    this.navCtrl.push(ConsentPage);
  }

}
