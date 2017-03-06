import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsentPage } from '../consent/consent';
import { PhotoPage } from '../photo/photo';
import { BodyMapPage } from '../body-map/body-map';
import { TestPage } from '../test/test';
import { GenericMedicalPage } from '../generic-medical/generic-medical';

/*
  Generated class for the SearchPatient page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-patient',
  templateUrl: 'search-patient.html'
})
export class SearchPatientPage {
 tab1Root: any = TestPage;
 tab2Root: any = ConsentPage;
 tab3Root: any = PhotoPage;
 tab4Root: any = GenericMedicalPage;
 tab5Root: any = BodyMapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPatientPage');
  }

  gotoConsent(){
    this.navCtrl.push(ConsentPage);
  }

}
