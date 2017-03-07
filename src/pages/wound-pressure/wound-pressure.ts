import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreatmentPage } from '../treatment/treatment';

/*
  Generated class for the WoundPressure page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wound-pressure',
  templateUrl: 'wound-pressure.html'
})
export class WoundPressurePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WoundPressurePage');
  }
  gotoTreatmentPage(){
    this.navCtrl.push(TreatmentPage);
  }

}
