import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BodyMapPage } from '../body-map/body-map'

/*
  Generated class for the GenericMedical page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  template: `
    <form (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Todo</ion-label>
        <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" block>Add Todo</button>
    </form>
  `,
  selector: 'page-generic-medical',
  templateUrl: 'generic-medical.html'
})
export class GenericMedicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenericMedicalPage');
  }

  gotoBodyMapPage(){
    this.navCtrl.push(BodyMapPage);
  }
}
