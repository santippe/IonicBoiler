import { Component } from '@angular/core';
import { BasePage } from '../base/base';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title : string = "Home";
}
