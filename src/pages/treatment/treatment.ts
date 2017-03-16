import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TopicalTherapyPlanPage } from '../topical-therapy-plan/topical-therapy-plan';
import { LarvaePlanPage } from '../larvae-plan/larvae-plan';
import { VacVerafloPlanPage } from '../vac-veraflo-plan/vac-veraflo-plan';
import { SkinTreatmentPage } from '../skin-treatment/skin-treatment';

/*
  Generated class for the Treatment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-treatment',
  templateUrl: 'treatment.html'
})
export class TreatmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatmentPage');
  }

  gotoLarvaePlanPage(){
    this.navCtrl.push(LarvaePlanPage);
  }
  gotoVacVerafloPlanPage(){
    this.navCtrl.push(VacVerafloPlanPage);
  }
  gotoTopicalTherapyPlanPage(){
    this.navCtrl.push(TopicalTherapyPlanPage);
  }
  gotoSkinTreatmentPage(){
    this.navCtrl.push(SkinTreatmentPage);
  }



}
