import { Component } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, Events, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  url: string;

  login: {loginButton: string};
 
  user: any = {
    username: '',
    userpass: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,         public loadingCtrl: LoadingController, public nav: Nav, private alertCtrl: AlertController, private http: HttpClient) {
  	
  	this.login = {
    	loginButton: 'light',
    };
    this.url = 'http://localhost:8080//Tujia';
    this.events.subscribe('user:registed', (user, time)=>{
      let utemp = user.split('-');
      console.log(utemp, ' --- 注册');
      this.user = {
        username: utemp[0],
        userpass: utemp[1]
      };
    });
  }

  goToRegister() {
  	this.navCtrl.push(RegisterPage);
  }

  goBack() {
  	this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  /*login*/
  loginUser() {
    
    let loading = this.loadingCtrl.create({
      content: '用户登录...'
    });

    loading.present();

    let userUp = 'name=' + this.user.username + 
                 '&pass=' + this.user.userpass;
    let header = {
        headers: {'Content-type': 'application/x-www-form-urlencoded'}
    };

    this.http.post(this.url + '/user/login', userUp, header).toPromise()
    .then((res)=>{
      console.log(res);
      loading.dismiss();
      this.events.publish('user:created', this.user.username, Date.now());
       this.nav.setRoot(HomePage);
    }).catch((err)=>{
      console.error(err);
      loading.dismiss();
      let logFail = this.alertCtrl.create({
          title: '用户名或者密码错误',
          buttons: [{text: '知道了', role: 'cancle'}]
        });
        logFail.present();
    });
    
    }


}
