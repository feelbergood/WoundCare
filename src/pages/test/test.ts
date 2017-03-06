import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPatientPage } from '../search-patient/search-patient';
import { ConsentPage } from '../consent/consent';
import { DbReviewPage } from '../db-review/db-review';
import { GenericMedicalPage} from '../generic-medical/generic-medical'
import { HomePage } from '../home/home'
import { PhotoPage } from '../photo/photo'
import { BodyMapPage} from '../body-map/body-map'
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      //this.navParams.get('userParams');
      //this.navCtrl.push(PageName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  gotoHomePage(){
    this.navCtrl.push(HomePage);
  }
  gotoConsentPage(){
    this.navCtrl.push(ConsentPage);
  }
  gotoPhotoPage(){
    this.navCtrl.push(PhotoPage);
  }
  gotoSearchPatientPage(){
    this.navCtrl.push(SearchPatientPage);
  }
  gotoGenericMedicalPage(){
    this.navCtrl.push(GenericMedicalPage);
  }
  gotoBodyMapPage(){
    this.navCtrl.push(BodyMapPage);
  }

}
