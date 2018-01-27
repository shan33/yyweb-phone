import { Component } from '@angular/core';

/**
 * Generated class for the ChatItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-item',
  templateUrl: 'chat-item.html'
})

export class ChatItemComponent {
  cultureTypes: Array<{src: string, alt: string, title: string, subtitle: string}>;
  constructor() {
    console.log('Hello ChatItemComponent Component');
    this.cultureTypes = [{
    	src: '/public/img/people.jpg',
    	alt: '无法显示图片',
    	title: 'person',
    	subtitle: 'ceshi',
    },
    {
      src: '/public/img/people.jpg',
      alt: '无法显示图片',
      title: 'person',
      subtitle: 'ceshi',
    },
    {
      src: '/public/img/people.jpg',
      alt: '无法显示图片',
      title: 'person',
      subtitle: 'ceshi',
    },
    {
      src: '/public/img/people.jpg',
      alt: '无法显示图片',
      title: 'person',
      subtitle: 'ceshi',
    },

    ];
  }

}
