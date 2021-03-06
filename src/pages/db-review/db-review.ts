import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PatientSummaryPage } from '../patient-summary/patient-summary';
/*
  Generated class for the DbReview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-db-review',
  templateUrl: 'db-review.html'
})
export class DbReviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DbReviewPage');
  }

  gotoPtsum(){
    this.navCtrl.push(PatientSummaryPage);
  }

}
