import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavigatorService } from './services/navservice/navigator';

import { HomePage } from './pages/home/home';
import { ListPage } from './pages/list/list';
import { Footer } from './components/footer/footer';
import { DetailsPage } from './pages/detailspage/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild(Footer) footer: Footer;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.footer.textOfTheButton = 'Prova test';
      NavigatorService.localNav = this.nav;
      console.log(NavigatorService.localNav)
      console.log(this.nav)
    });
  }

  openPage(page, pageInfo) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //console.log(this.nav)
    //this.nav.setRoot(page.component);
    NavigatorService.goTo(page.component, pageInfo);
  }
}
