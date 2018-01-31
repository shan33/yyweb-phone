import { Component } from '@angular/core';
import { NavController, ModalController } from 
'ionic-angular';

@Component({
	selector: 'page-talking',
	templateUrl: 'talking.html'
})

export class TalkingPage {
	items: any;
	constructor(public navCtrl: NavController, private modal: ModalController) {
		this.items = [{
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
		];
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