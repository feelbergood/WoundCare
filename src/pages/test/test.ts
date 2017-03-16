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
import { GenericMedicalPage} from '../generic-medical/generic-medical';
import { HomePage } from '../home/home';
import { PhotoPage } from '../photo/photo';
import { BodyMapPage } from '../body-map/body-map';
import { TreatmentPage } from '../treatment/treatment';
import { TopicalTherapyPlanPage } from '../topical-therapy-plan/topical-therapy-plan';
import { VacVerafloPlanPage } from '../vac-veraflo-plan/vac-veraflo-plan';
import { LarvaePlanPage } from '../larvae-plan/larvae-plan';
import { SkinTreatmentPage } from '../skin-treatment/skin-treatment';
import { GenericWoundPage } from '../generic-wound/generic-wound';
import { FollowUpTreatmentPage } from '../follow-up-treatment/follow-up-treatment'
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

  gotoDbReviewPage(){
    this.navCtrl.push(DbReviewPage);
  }

  gotoLegulcerPage(){
    this.navCtrl.push(WoundLegulcerPage);
  }

  gotoPodiatryPage(){
    this.navCtrl.push(WoundPodiatryPage);
  }

  gotoWoundOtherPage(){
    this.navCtrl.push(WoundOtherPage);
  }

  gotoPressurePage(){
    this.navCtrl.push(WoundPressurePage);
  }

  gotoReviewAssessPage(){
    this.navCtrl.push(ReviewAssessPage);
  }

  gotoReassessPage(){
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

  gotoTreatmentPage(){
    this.navCtrl.push(TreatmentPage);
  }
  gotoTopicalPage(){
    this.navCtrl.push(TopicalTherapyPlanPage);
  }
  gotoVacVerafloPage(){
    this.navCtrl.push(VacVerafloPlanPage);
  }
  gotoLarvaePage(){
    this.navCtrl.push(LarvaePlanPage);
  }
  gotoSkinTreatment(){
    this.navCtrl.push(SkinTreatmentPage);
  }
  gotoGenericWoundPage(){
    this.navCtrl.push(GenericWoundPage);
  }
  gotoFollowUpTreatmentPage(){
    this.navCtrl.push(FollowUpTreatmentPage);
  }
}
