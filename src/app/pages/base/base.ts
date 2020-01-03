import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-base',
  templateUrl: 'base.html'
})
export class BasePage {

  constructor(public navCtrl: NavController) {
  
  }
}
