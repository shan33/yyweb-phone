import { Component } from '@angular/core';
import { NavController, ModalController, Events, AlertController } from 
'ionic-angular';
//import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'page-talking',
	templateUrl: 'talking.html'
})

export class TalkingPage {
	items: any;
	url:string = 'http://localhost:8080'; // /Tujia';

	constructor(public navCtrl: NavController, private modal: ModalController, private alertCtrl: AlertController, private http: HttpClient) {
		/*this.items = [{
			username: 'xls',
			commentIndex: '1',
			userIndex: '1',
			userTitle: 'testTitle',
			content: 'test'
		}, 
		{
			username: 'xls',
			commentIndex: '1',
			
			userIndex: '1',
			userTitle: 'testTitle',
			content: 'test'
		}
		];*/
	}

	ionViewDidLoad() {
	    let logFail = this.alertCtrl.create({
	          title: '网络请求错误',
	          buttons: [{text: '知道了', role: 'cancle'}]
	        });

	    this.http.get(this.url + '/talking/getPosts', {
	      headers: {'Content-type': 'application/x-www-form-urlencoded'}
	    }).toPromise()
	      .then((res)=>{
	        console.log(res);
	        if (res) {
	          this.items = res;
	          //this.detailItem.more = res.info;

	        } else {
	          logFail.present();
	        }
	      }).catch((err)=>{
	        console.error(err);
	        logFail.present();
	      });
	  }


	/*get communication details*/
	initItems() {
		
	}
	getCommunication() {

	}


	/*get the details of the specific communicating card*/
	holdMore(event) {
		//let more = this.modal.create();
		console.log('click');
	}
}



/*@component({
	template: '
			`<p><b>{{ com.username }}</b>: {{ com.userTitle }}
            `<label>{{ com.commentIndex }}</label>
            `<label>{{ com.userIndex }}</label></p> 
            `<hr>
          	`fdhskjfhjkdshfghdsssssssssssssssssssssssssssssssssssskjvnfdmbvjfdhsiuyurewahfkjhdsjkaulahchdjsklancdjchjuhjdjoi
          	`{{ com.content }}'
    
});*/

class DetailCard {
	constructor(){}
}