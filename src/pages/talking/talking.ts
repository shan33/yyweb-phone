import { Component } from '@angular/core';
import { NavController } from 
'ionic-angular';

@Component({
	selector: 'page-talking',
	templateUrl: 'talking.html'
})

export class TalkingPage {
	items: any;
	constructor(public navCtrl: NavController) {
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
}