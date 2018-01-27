import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCultureItemPage } from './detail-culture-item';

@NgModule({
  declarations: [
    DetailCultureItemPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailCultureItemPage),
  ],
})
export class DetailCultureItemPageModule {}
