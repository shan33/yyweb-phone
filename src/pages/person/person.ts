import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular'

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HomePage } from '../home/home'

@Component({
	selector: 'page-person',
	templateUrl: 'person.html'
})

export class PersonPage {
	url: string = 'http://localhost:8080'; // /Tujia';


	constructor(public navCtrl: NavController, private alertCtrl: AlertController, private http: HttpClient )
	{}	


	/*get more infomation*/
	doInfiniteMoreComment(event) {
		
	}

	close() {
		this.navCtrl.setRoot(HomePage);		
	}

  	ionViewDidLoad() {
  		let header = {
	        headers: {'Content-type': 'application/x-www-form-urlencoded'}
	    };
	    
	    let regFail = this.alertCtrl.create({
	          title: '请先登录',
	          buttons: [{text: '知道了', 
	          			 role: 'cancle',
	          			 handler: ()=>{
	          			 	this.navCtrl.setRoot(HomePage);
	          			 }
	          			 }]
	        });

	    this.http.get(this.url + '/user/self_info?message=info', header).toPromise()	
	    .then((res)=>{
	      console.log(res);
	      if (res) {
	      } else {
	        regFail.present();
	      }
	      
	    }).catch((err)=>{
	      console.error(err);
	      regFail.present();
	    });
  	}
}


