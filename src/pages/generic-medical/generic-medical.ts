import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BodyMapPage } from '../body-map/body-map';

/*
  Generated class for the GenericMedical page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-generic-medical',
  templateUrl: 'generic-medical.html'
})
export class GenericMedicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenericMedicalPage');
  }

  gotoBdmap(){
    this.navCtrl.push(BodyMapPage);
  }

}
