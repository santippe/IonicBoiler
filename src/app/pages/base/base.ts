import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-base',
  templateUrl: 'base.html'
})
export class BasePage {

  @Input() title : string = "Home";
  constructor(public navCtrl: NavController) {
    
  }
}
