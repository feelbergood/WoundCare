import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GenericMedicalPage } from '../generic-medical/generic-medical';
/*
  Generated class for the Reassess page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reassess',
  templateUrl: 'reassess.html'
})
export class ReassessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReassessPage');
  }

  gotoGene(){
    this.navCtrl.push(GenericMedicalPage);
  }

}
