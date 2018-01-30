import { Component } from '@angular/core';
import { NavController, NavParams, ModalController  } from 'ionic-angular'

import { DetailCultureItemPage } from '../detail-culture-item/detail-culture-item'

@Component({
	selector: 'page-culture',
	templateUrl: 'culture.html'
})

/**
* history, music, dance, man, woman, eatAndDrink, map, marry, house
*/


export class CulturePage {
	cultureTypes: Array<{src: string, alt: string, title: string, subtitle: string, index: string}>;

	constructor(public navCtrl: NavController, public NavParams: NavParams, private modalCtrl: ModalController ) {
		this.cultureTypes = [];
		let location = '/public/img/';
		this.cultureTypes = [
			{src: location + 'history.jpg', alt: '', title: '历史', subtitle: '历史来源介绍', index: '1'},
			{src: location + 'boy.jpg', alt: '', title: '男性', subtitle: '男性介绍', index: '2'},
			{src: location + 'girl.jpg', alt: '', title: '女性', subtitle: '女性介绍', index: '3'},
			{src: location + 'eat.jpg', alt: '', title: '吃喝', subtitle: '饮食文化介绍', index: '4'},
			{src: location + 'house.jpg', alt: '', title: '房屋', subtitle: '房屋建筑介绍', index: '5'},
			{src: location + 'music.jpg', alt: '', title: '音乐', subtitle: '音乐乐器介绍', index: '6'},
			{src: location + 'dance.jpg', alt: '', title: '舞蹈', subtitle: '有关舞蹈介绍', index: '7'},
			{src: location + 'map.jpg', alt: '', title: '地图', subtitle: '地理位置介绍', index: '8'},
			{src: location + 'marry.jpg', alt: '', title: '婚假', subtitle: '婚姻传统介绍', index: '9'}
		];

	}	

	openDetailPage(event) {
		let index = event.target.nextSibling.nextSibling.innerHTML-1;
		console.log(index);
		let detailCultureItem = this.modalCtrl.create(DetailCultureItemPage, {data: this.cultureTypes[index]});
		detailCultureItem.present();

	}
}