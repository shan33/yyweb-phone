import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailCultureItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-culture-item',
  templateUrl: 'detail-culture-item.html'
})

export class DetailCultureItemPage {

  detailItem: any;
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.detailItem = {
  		data: navParams.get('data'),
  		choose: '评论'
  	};
  	this.items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '12', '13', '14', '15', '33', '34', '45', '56'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailCultureItemPage');
  }

  doInfiniteMoreComment(event) {

  }

  dismiss() {
  	this.navCtrl.pop();
  }
}
