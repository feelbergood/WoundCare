import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { PhotoPage } from '../pages/photo/photo';
import { ConsentPage } from '../pages/consent/consent';
import { SearchPatientPage } from '../pages/search-patient/search-patient';
import { DbReviewPage } from '../pages/db-review/db-review';
import { BodyMapPage } from '../pages/body-map/body-map'
import { GenericMedicalPage } from '../pages/generic-medical/generic-medical'
import { SignaturePadModule } from 'angular2-signaturepad';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    SearchPatientPage,
    DbReviewPage,
    ConsentPage,
    PhotoPage,
    GenericMedicalPage,
    BodyMapPage
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
    ConsentPage,
    PhotoPage,
    GenericMedicalPage,
    BodyMapPage
  ],
  providers: [Storage]
})
export class AppModule {}
