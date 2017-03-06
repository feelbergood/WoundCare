//source:https://devdactic.com/signature-drawpad-ionic-2/

import { Component, ViewChild } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { PhotoPage } from '../photo/photo';
import { ReviewAssessPage } from '../review-assess/review-assess';

@Component({
  selector: 'page-consent',
  templateUrl: 'consent.html'
})
export class ConsentPage {
  signature = '';
  isDrawing = false;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  constructor(public navController: NavController,public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController, public navParams: NavParams) {}

  ionViewDidEnter() {
    this.signaturePad.clear()
    this.storage.get('savedSignature').then((data) => {
      this.signature = data;
    });
  }

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }

  savePad() {
    this.signature = this.signaturePad.toDataURL();
    this.storage.set('savedSignature', this.signature);
    this.signaturePad.clear();
    let toast = this.toastCtrl.create({
      message: 'New Signature saved.',
      duration: 3000
    });
    toast.present();
  }

  clearPad() {
    this.signaturePad.clear();
  }

  gotoPhoto(){
    this.navCtrl.push(PhotoPage);
  }

  gotoReviewass(){
    this.navCtrl.push(ReviewAssessPage);
  }

}
