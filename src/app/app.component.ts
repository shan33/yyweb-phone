import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  

  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  app: any = {
    user: '游客'
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation

    this.pages = [
      { title: '主页', icon: 'home', component: HomePage },
      { title: '联系我们', icon: 'at',  component: ListPage },
      { title: '个人中心', icon: 'person', component: HomePage},
      { title: '内容', icon: 'disc', component: ListPage},
      { title: '登录/注册', icon: 'happy', component: LoginPage},
    ];

    //User entered
    events.subscribe('user:created', (user, time)=>{
      console.log(user.username, "  logined");
      this.app.user = user.split('-')[0];
      this.pages[4].title = '退出登录';
    }); 

    //user exited
    events.subscribe('user:exit', (time)=>{
      console.log(this.app.user , " exited");
      this.pages[4].title = '登录/注册';
      this.app.user = '游客';
//      backHome();

      this.nav.setRoot(HomePage);

    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log(page);
    if (page.title == '退出登录') {
      this.events.publish('user:exit', Date.now());
      this.app.user = '游客';
    } else
      this.nav.setRoot(page.component);
  }

  backHome() {
    this.nav.setRoot(HomePage);
  }
}
