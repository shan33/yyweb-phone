import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { CulturePage } from '../pages/culture/culture';
import { PersonPage } from '../pages/person/person';
import { TalkingPage } from '../pages/talking/talking';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DetailCultureItemPage } from '../pages/detail-culture-item/detail-culture-item'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CulturePage,
    TalkingPage,
    PersonPage,
    LoginPage,
    RegisterPage,
    DetailCultureItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CulturePage,
    TalkingPage,
    PersonPage,
    LoginPage,
    RegisterPage,
    DetailCultureItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
