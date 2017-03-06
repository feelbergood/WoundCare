import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReassessPage } from '../reassess/reassess';
import { FollowUpPage } from '../follow-up/follow-up';
/*
  Generated class for the ReviewAssess page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-review-assess',
  templateUrl: 'review-assess.html'
})
export class ReviewAssessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewAssessPage');
  }

  gotoReass() {
    this.navCtrl.push(ReassessPage);
  }

  gotoFup() {
    this.navCtrl.push(FollowUpPage);
  }

}
