import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreatmentPage } from '../treatment/treatment';

/*
  Generated class for the WoundOther page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wound-other',
  templateUrl: 'wound-other.html'
})
export class WoundOtherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WoundOtherPage');
  }

  gotoTreatmentPage(){
    this.navCtrl.push(TreatmentPage);
  }

}
