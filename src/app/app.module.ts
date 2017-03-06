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
    ReassessPage
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
    DbReviewPage,
    WoundLegulcerPage,
    WoundPodiatryPage,
    WoundOtherPage,
    WoundPressurePage,
    ReviewAssessPage,
    ReassessPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
