import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreatmentPage } from '../treatment/treatment';

/*
  Generated class for the FollowUpTreatment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-follow-up-treatment',
  templateUrl: 'follow-up-treatment.html'
})
export class FollowUpTreatmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowUpTreatmentPage');
  }

  gotoTreatmentPage(){
    this.navCtrl.push(TreatmentPage);
  }

}
