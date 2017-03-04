import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { SearchPatientPage } from '../pages/search-patient/search-patient';
import { DbReviewPage } from '../pages/db-review/db-review';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    SearchPatientPage,
    DbReviewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage,
    SearchPatientPage,
    DbReviewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
