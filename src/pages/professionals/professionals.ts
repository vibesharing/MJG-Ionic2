import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ProfessionalPage } from './professional/professional';

import { HttpService } from '../../app/services/http.service';

import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-professionals',
  templateUrl: 'professionals.html'
})

export class ProfessionalsPage implements OnInit {
  private _httpService: HttpService;

  private _selectedPro: any;
  private _professionals: Array<any>;

  private _navCtrl: NavController;
  private _page: number = 0;

  constructor (navCtrl: NavController, navParams: NavParams, httpService: HttpService) {
    this._httpService = httpService;
    this._navCtrl = navCtrl;
    this._selectedPro = navParams.get('pro');
  }

  public ngOnInit(): void {
    this._httpService.getProfessionnals().subscribe(response => {
      this._professionals = response;
      this._page = 2 ;
    })
  }

  public goToProDetails(event, pro): void {
    this._navCtrl.push(ProfessionalPage, {
      pro: pro
    });
  }

   public doInfinite(infiniteScroll) {
     this._httpService.getProfessionnals(this._page).subscribe(response => {
        setTimeout(() => {
            this._professionals = this._professionals.concat(response);

            infiniteScroll.complete();
            this._page += 1;
        }, 1000);
    });
  }
}
