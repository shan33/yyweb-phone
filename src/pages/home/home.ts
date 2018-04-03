import { Component } from '@angular/core';
import { NavController, Events, AlertController} from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public events: Events, public alertCtrl: AlertController) {
    this.initializeItems();
    
  }

  initializeItems() {
    this.items = [
      {
        name: '2017《民族文学》重点作家培训班'举行,
        url: 'http://www.mzwxzz.com/newsitem/278100536',
        from: '民族文学网',
        abstract: '挖掘民族题材创作，培养优秀少数民族作家，建立民族文学精神家园，是《民族文学》杂志社一直以来的工作重点。10月29日至11月2日，由《民族文学》杂志社、中国少数民族作家学会、云南省作家协会主办...'
      }, {
        name: '土家族著名歌星阿朵',
        url: 'http://www.minzu56.net/tjz/rw/6356.html',
        from: '民族网',
        abstract: '阿朵是一位来自湖南的土家族女孩子。她既有那个民族所特有的万种风情，又有这个时代所赋予她的时尚和活力。土家族姑娘阿朵尽管以新人的姿态发片，其实她已经在圈里奋斗了差不多20年...'
      }, {
        name: '土家族摆手舞',
        url: 'http://www.minzu56.net/tjz/wy/12778.html',
        from: '民族网',
        abstract: '摆手舞据史书记载，最早源于商周时期巴人的军战舞。西汉时，巴人的这种军战舞成为汉宫廷舞乐，被称为巴谕舞。梁又复原称，后改为鞞舞。唐初，巴谕舞列为清高乐。从汉到唐宋，巴谕舞在民间经久不衰。摆手舞有大摆手、小摆手之分...'
      }
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
    if (item == 1) {
      this.navCtrl.push(CulturePage);
    }
    else if (item == 2)
      this.navCtrl.push(TalkingPage);
    else if (item == 3)
      this.navCtrl.push(PersonPage);

  }
}

