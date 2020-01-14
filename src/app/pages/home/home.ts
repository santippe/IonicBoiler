import { Component } from '@angular/core';
import { BasePage } from '../base/base';
import { MockedServices } from '../../services/mocked/mock';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [MockedServices]
})
export class HomePage {
  title: string = "Home";
  public plentyOfData: any[] = new Array();

  constructor(public mock : MockedServices){
    this.plentyOfData = this.mock.callMeBaby();
  }

  tellMeAStory(): void {
    this.plentyOfData.push({ test: 'value' });
  }
}
