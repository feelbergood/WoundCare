
import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GeneralAssessPage } from '../general-assess/general-assess';

/*
  Generated class for the BodyMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-body-map',
  templateUrl: 'body-map.html'
})
export class BodyMapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BodyMapPage');
  }

  gotoGene(){
    this.navCtrl.push(GeneralAssessPage);
  }

}
