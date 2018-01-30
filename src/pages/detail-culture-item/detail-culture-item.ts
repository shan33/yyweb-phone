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
  detailChoose: string = 'comment';
  responseBox: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.detailItem = {
  		data: navParams.get('data'),
  		chooseComments: true
  	};
  	this.items = [
  		{
  			username: '许灡珊',
  			userTitle: '发表了一个演说',
  			commentIndex: '1',
  			userIndex: '1',
  			content: '这就是一个测试',
  			time: '2017-09-01'
  		},
  		{
  			username: '许灡珊',
  			userTitle: '发表了一个演说',
  			commentIndex: '1',
  			userIndex: '1',
  			content: '这就是一个测试',
  			time: '2017-09-01'
  		}

  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailCultureItemPage');
  }

  doInfiniteMoreComment(event) {
  	
  }

  dismiss() {
  	this.navCtrl.pop();
  }

  /* select the button of comments or details*/
  selectedComments() {
  	this.detailItem.chooseComments = !this.detailItem.chooseComments;
  }
  selectedDetails() {
  	this.detailItem.chooseComments = !this.detailItem.chooseComments;

  }

  /*show the box to response*/
  response() {
    this.responseBox = !this.responseBox;
    //let inputBox = event.target.parentNode.getElementByTagName('input')[0];
    //inputBox.setAttribute('class', 'show');
  }
}
