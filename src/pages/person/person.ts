import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

import { HomePage } from '../home/home'

@Component({
	selector: 'page-person',
	templateUrl: 'person.html'
})

export class PersonPage {
	constructor(public navCtrl: NavController)
	{}	


	/*get more infomation*/
	doInfiniteMoreComment(event) {
		
	}

	close() {
		this.navCtrl.setRoot(HomePage);		
	}
}

