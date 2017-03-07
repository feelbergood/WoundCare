import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { PhotoPage } from '../pages/photo/photo';
import { ConsentPage } from '../pages/consent/consent';
import { SearchPatientPage } from '../pages/search-patient/search-patient';
import { DbReviewPage } from '../pages/db-review/db-review';
import { BodyMapPage } from '../pages/body-map/body-map';
import { GenericMedicalPage } from '../pages/generic-medical/generic-medical';
import { PatientSummaryPage } from '../pages/patient-summary/patient-summary';
import { PatientListPage } from '../pages/patient-list/patient-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = TestPage;
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform) {
    this.pages = [
    { title: 'Consent Page', component: HomePage },
    { title: 'Take Photo', component: PhotoPage },
    { title: 'General Medical Assessment', component: GenericMedicalPage },
    { title: 'Search Patient Page', component: SearchPatientPage },
    { title: 'Body Map Page', component: BodyMapPage },
  ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openPage(page) {
   // Reset the content nav to have just this page
   // we wouldn't want the back button to show in this scenario
   this.nav.setRoot(page.component);
 }
}
