import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPatientPage } from '../search-patient/search-patient';
import { DbReviewPage } from '../db-review/db-review';
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

  gotoPage(){
    this.navCtrl.push(SearchPatientPage);
  }

}
