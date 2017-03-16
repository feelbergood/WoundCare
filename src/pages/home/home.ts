import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPatientPage } from '../search-patient/search-patient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  gotoSearchPatientPage(){
    this.navCtrl.push(SearchPatientPage);
  }

}
