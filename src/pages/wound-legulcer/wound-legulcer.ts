import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WoundPodiatryPage } from '../wound-podiatry/wound-podiatry';

/*
  Generated class for the WoundLegulcer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wound-legulcer',
  templateUrl: 'wound-legulcer.html'
})
export class WoundLegulcerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WoundLegulcerPage');
  }

  gotoPod() {
    this.navCtrl.push(WoundPodiatryPage);
  }
}
