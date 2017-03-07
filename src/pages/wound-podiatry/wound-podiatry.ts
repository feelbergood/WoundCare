import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreatmentPage } from '../treatment/treatment';

/*
  Generated class for the WoundPodiatry page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wound-podiatry',
  templateUrl: 'wound-podiatry.html'
})
export class WoundPodiatryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WoundPodiatryPage');
  }
  gotoTreatmentPage(){
    this.navCtrl.push(TreatmentPage);
  }
}
