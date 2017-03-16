import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { SearchPatientPage } from '../pages/search-patient/search-patient';
import { DbReviewPage } from '../pages/db-review/db-review';
import { WoundLegulcerPage } from '../pages/wound-legulcer/wound-legulcer';
import { WoundPodiatryPage} from '../pages/wound-podiatry/wound-podiatry';
import { WoundOtherPage } from '../pages/wound-other/wound-other';
import { WoundPressurePage } from '../pages/wound-pressure/wound-pressure';
import { ReviewAssessPage } from '../pages/review-assess/review-assess';
import { ReassessPage } from '../pages/reassess/reassess';
import { FollowUpPage } from '../pages/follow-up/follow-up';
import { PhotoPage } from '../pages/photo/photo';
import { ConsentPage } from '../pages/consent/consent';
import { BodyMapPage } from '../pages/body-map/body-map';
import { GenericMedicalPage } from '../pages/generic-medical/generic-medical';
import { SignaturePadModule } from 'angular2-signaturepad';
import { Storage } from '@ionic/storage';
import { PatientSummaryPage } from '../pages/patient-summary/patient-summary';
import { PatientListPage } from '../pages/patient-list/patient-list';
import { TreatmentPage } from '../pages/treatment/treatment';
import { SkinTreatmentPage } from '../pages/skin-treatment/skin-treatment';
import { VacVerafloPlanPage } from '../pages/vac-veraflo-plan/vac-veraflo-plan';
import { LarvaePlanPage } from '../pages/larvae-plan/larvae-plan';
import { TopicalTherapyPlanPage } from '../pages/topical-therapy-plan/topical-therapy-plan';
import { GenericWoundPage } from '../pages/generic-wound/generic-wound';
import { FollowUpTreatmentPage } from '../pages/follow-up-treatment/follow-up-treatment'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    SearchPatientPage,
    DbReviewPage,
    WoundLegulcerPage,
    WoundPodiatryPage,
    WoundOtherPage,
    WoundPressurePage,
    ReviewAssessPage,
    ReassessPage,
    FollowUpPage,
    ConsentPage,
    PhotoPage,
    GenericMedicalPage,
    BodyMapPage,
    PatientSummaryPage,
    PatientListPage,
    TreatmentPage,
    SkinTreatmentPage,
    VacVerafloPlanPage,
    LarvaePlanPage,
    TopicalTherapyPlanPage,
    GenericWoundPage,
    FollowUpTreatmentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SignaturePadModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage,
    SearchPatientPage,
    DbReviewPage,
    WoundLegulcerPage,
    WoundPodiatryPage,
    WoundOtherPage,
    WoundPressurePage,
    ReviewAssessPage,
    ReassessPage,
    FollowUpPage,
    ConsentPage,
    PhotoPage,
    GenericMedicalPage,
    BodyMapPage,
    PatientSummaryPage,
    PatientListPage,
    TreatmentPage,
    SkinTreatmentPage,
    VacVerafloPlanPage,
    LarvaePlanPage,
    TopicalTherapyPlanPage,
    GenericWoundPage,
    FollowUpTreatmentPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
