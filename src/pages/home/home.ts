import { Component } from '@angular/core';
import { NavController, Events} from 'ionic-angular';

import { CulturePage } from '../culture/culture'
import { TalkingPage } from '../talking/talking'
import { PersonPage } from '../person/person'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items;
  segment: string = "founds";
  constructor(public navCtrl: NavController, public events: Events) {
    this.initializeItems();
    
  }

  initializeItems() {
    this.items = [
    	'xulanshan',
    	'jessica'
    ];
    this.events.subscribe('user:created', (user, time)=>{
        console.log(user + " home logined");
        this.items = [
        'xulanshan',
        'jessica',
        'one',
        'two'
      ];
    }); 
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openOtherPage(item) {

  	console.log('open other page');
    if (item == 1)
    	this.navCtrl.push(CulturePage);
    else if (item == 2)
      this.navCtrl.push(TalkingPage);
    else if (item == 3)
      this.navCtrl.push(PersonPage);

  }
}

