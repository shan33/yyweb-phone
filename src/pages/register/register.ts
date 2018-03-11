import { Component } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the RegisterPage page.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {

  url: string;

	passWatch: boolean = false;
	register: any = {
  		checked: 'false',
  		regButton: 'light',
  		passType: 'password',
  		eyeType: 'eye',
  		minority: 'false',
  		username: '',
  		userpass: ''
  	};
	
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public nav: Nav, public http: HttpClient, public alertCtrl: AlertController) {
    this.url = 'http://localhost:8080//Tujia';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  /*change the type of password input box*/
  togglePasstype(event) {
  	console.log(event + "'d'");
  	console.log( 'passWatch: ' + this.passWatch);

  	this.passWatch = !this.passWatch;
  	if (this.passWatch) { 
	  	this.register.passType = 'text';
	  	this.register.eyeType = 'eye-off';
	} else {
		this.register.passType = 'password';
	  	this.register.eyeType = 'eye';
	}
}

  /*register*/
  registerNewUser() {

  	
    let userUp = 'username=' + this.register.username + 
                 '&userpass=' + this.register.userpass + 
                 '&minority=' + (this.register.minority?0:1); 

    let userD = {username: this.register.username,   
                 userpass: this.register.userpass, 
                 minority: (this.register.minority?0:1) };

    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

  	let header = {
        headers: headers
    };
    
    this.http.post(this.url + '/user/add?', userD , header).toPromise()
    .then((res)=>{
      console.log(res);
      this.events.publish(
        'user:registed', this.register.username + '-' + this.register.userpass, Date.now()
      );
      this.nav.pop();      
      
    }).catch((err)=>{
      console.error(err);
      let regFail = this.alertCtrl.create({
          title: '用户注册失败',
          buttons: [{text: '知道了', role: 'cancle'}]
        });
        regFail.present();
    });
  }
}
