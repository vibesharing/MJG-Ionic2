import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html'
})
export class ProfessionalPage {
public professional : any = {};

  constructor( navParams: NavParams ) {
      this.professional = navParams.get('pro');
  }
}
