import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html'
})
export class ProfessionalPage {
public professional : any = {};
private _navCtrl : NavController;

  constructor(navCtrl: NavController, navParams: NavParams) {
      this.professional = navParams.get('pro');
      console.log(this.professional);
  }
}
