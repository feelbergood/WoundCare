import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {    
  }

  gotoTest(){
    this.navCtrl.push(TestPage);
  }

}
