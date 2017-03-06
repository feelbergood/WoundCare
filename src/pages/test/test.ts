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
import { ConsentPage } from '../consent/consent';
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
