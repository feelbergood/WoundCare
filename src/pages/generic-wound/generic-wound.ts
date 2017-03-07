import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WoundLegulcerPage } from '../wound-legulcer/wound-legulcer';
import { WoundOtherPage } from '../wound-other/wound-other';
import { WoundPressurePage } from '../wound-pressure/wound-pressure';

/*
  Generated class for the GeneralAssess page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-generic-wound',
  templateUrl: 'generic-wound.html'
})
export class GenericWoundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralAssessPage');
  }
  gotoLegulcer(){
    this.navCtrl.push(WoundLegulcerPage);
  }
  gotoOther(){
    this.navCtrl.push(WoundOtherPage);
  }
  gotoPreulcer(){
    this.navCtrl.push(WoundPressurePage);
  }
}
