import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { HttpService } from '../../../app/services/http.service';

@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html'
})
export class ProfessionalPage implements OnInit {
public professional : any = {};

private _httpService: HttpService;

  constructor( public navParams: NavParams, httpService: HttpService ) {
      this._httpService = httpService;
  }

  public ngOnInit(): void {
    this._httpService.getProfessional(this.navParams.get('pro')).subscribe((professional) => {
      this.professional = professional;
    })
  }
}
