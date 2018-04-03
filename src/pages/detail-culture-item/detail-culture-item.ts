import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, PopoverController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DetailCultureItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  template:`
    <ion-card>
      <ion-img src="{{picUrl}}" (swipe)=showMorePics()></ion-img>
    </ion-card>
  `
})
export class ImgContent{
  pics: [];
  index: number = 0;
  picUrl: string;
  constructor(private navParam: NavParams){}
  
  ngOnInit() {
    if (this.navParam.data) {
      this.pics = this.navParam.pics;
    }
  }

  showMorePics() {
    if (this.pics) {
      this.index = (++this.index)<this.pics.size? this.index:0;
      this.picUrl = this.pics[this.index];
    }
  }
}


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
  img : any = {
      pics: [],
      index: 0,
      url: ''
    };

  index: number = 0;
  url:string = 'http://localhost:8080'; // /Tujia';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private alertCtrl: AlertController, private popover: PopoverController) {
  //private events: Events
  	this.detailItem = {
  		data: navParams.get('data'),
  		chooseComments: true,
      more: {}
  	};

  	this.index = navParams.get('idx');
  }

  ionViewDidLoad() {
    let logFail = this.alertCtrl.create({
          title: '网络请求错误',
          buttons: [{text: '知道了', role: 'cancle'}]
        });

    this.http.get(this.url + '/culture/spe_info?index=' + this.index, {
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    }).toPromise()
      .then((res)=>{
        if (res) {
          this.items = res.talks;
          this.detailItem.more = res.info;

          this.img.pics = res.info.pic;
          
          this.img.url = this.img.pics[0];
          console.log(this.img.pics);
          
        } else {
          logFail.present();
        }
      })
      .catch((err)=>{
        console.error(err);
        logFail.present();
      });
  }
  

  showMorePicsBox() {
    
    let popover = this.popover.create(ImgContent, {
      pics: this.img.pics
    });
    popover.present();
    /*let idx = this.img.index;
    this.img.index = (++idx)<(this.img.pics.size)? idx:0;
    this.img.url = this.url + '/pic/' + this.img.pics[this.img.index] + '.jpg';  
    */

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
