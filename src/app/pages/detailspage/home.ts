import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BasePage } from '../base/base';
import { NavParams } from 'ionic-angular';
import { MockedServices } from '../../services/mocked/mock';

@Component({
  selector: 'page-detail',
  templateUrl: 'home.html',
  providers: [MockedServices]
})
export class DetailsPage {
  title: string = "";
  test: string = ""
  picSrc: string = ""
  // public plentyOfData: any[] = new Array();

  constructor(public mock: MockedServices, public navParams: NavParams) {
    console.log('detail arrived')
    this.title = this.navParams.data.itemTitle
    this.picSrc = this.navParams.data.picSrc
  }

  // tellMeAStory(): void {
  //   this.mock.getNewelements().then(res => {
  //     console.log(res.collection.items.length)
  //     console.log(res.collection.items[0])
  //     let output = res.collection.items.slice(0, 20).map(x => new pippo(x.links[0].href))
  //     console.log(output)
  //     this.plentyOfData = output
  //   })
  // }
}

// class pippo {
//   public image: string
//   constructor(int0: string) {
//     this.image = int0
//   }
// }