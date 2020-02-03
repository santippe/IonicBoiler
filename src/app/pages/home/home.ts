import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BasePage } from '../base/base';
import { DetailsPage } from '../detailspage/home';
import { MockedServices } from '../../services/mocked/mock';
import { NavigatorService } from '../../services/navservice/navigator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MockedServices]
})
export class HomePage {
  title: string = "Home";
  test: string = ""
  public plentyOfData: any[] = new Array();

  constructor(public mock: MockedServices) {
    //this.plentyOfData = this.mock.callMeBaby();
  }

  tellMeAStory(): void {
    this.mock.getNewelements().then(res => {
      console.log(res.collection.items.length)
      console.log(res.collection.items[0])
      let output = res.collection.items.slice(0, 20).map(x => new pippo(x.links[0].href))
      console.log(output)
      this.plentyOfData = output
    })
  }

  goto(whereGo) {
    alert(whereGo)
    NavigatorService.goTo(DetailsPage)
  }
}

class pippo {
  public image: string
  constructor(int0: string) {
    this.image = int0
  }
}