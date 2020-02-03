import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { BasePage } from './pages/base/base';
import { HomePage } from './pages/home/home';
import { ListPage } from './pages/list/list';
import { DetailsPage } from './pages/detailspage/home';
import { Footer } from './components/footer/footer';
import { NavigatorService } from './services/navservice/navigator';
//import { MockedServices } from './services/mocked/mock';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Footer,
    BasePage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage
  ],
  providers: [
    NavigatorService,
    //[{ provide: NavigatorService, useClass: NavigatorService }],
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
