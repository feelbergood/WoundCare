import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPatientPage } from '../search-patient/search-patient';
import { DbReviewPage } from '../db-review/db-review';
import { WoundLegulcerPage } from '../wound-legulcer/wound-legulcer'
import { WoundPodiatryPage} from '../wound-podiatry/wound-podiatry';
import { WoundOtherPage } from '../wound-other/wound-other';
import { WoundPressurePage } from '../wound-pressure/wound-pressure';
import { ReviewAssessPage } from '../review-assess/review-assess';
import { ReassessPage } from '../reassess/reassess';

/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  gotoP1(){
    this.navCtrl.push(SearchPatientPage);
  }

  gotoP2(){
    this.navCtrl.push(DbReviewPage);
  }

  gotoP3(){
    this.navCtrl.push(WoundLegulcerPage);
  }

  gotoP4(){
    this.navCtrl.push(WoundPodiatryPage);
  }

  gotoP5(){
    this.navCtrl.push(WoundOtherPage);
  }

  gotoP6(){
    this.navCtrl.push(WoundPressurePage);
  }

  gotoP7(){
    this.navCtrl.push(ReviewAssessPage);
  }

  gotoP8(){
    this.navCtrl.push(ReassessPage);
  }  
}
