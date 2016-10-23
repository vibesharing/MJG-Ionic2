import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ProfessionalPage } from './professional/professional';

import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-professionals',
  templateUrl: 'professionals.html'
})

export class ProfessionalsPage implements OnInit {
  private _http: Http;

  private _selectedPro: any;
  private _professionals: Array<any>;

  private _navCtrl: NavController;

  constructor (navCtrl: NavController, navParams: NavParams, http: Http) {
    this._http = http;
    this._navCtrl = navCtrl;
    this._selectedPro = navParams.get('pro');

  }

  public ngOnInit(): void {
    this.getProfessionals().subscribe(response => {
      console.log(response);
      this._professionals = response;
    })
  /*  this.getWeatherInCity('rio').subscribe(response => {
      console.log(response);
    }) */
  }

  public goToProDetails(event, pro): void {
    this._navCtrl.push(ProfessionalPage, {
      pro: pro
    });
  }

  public getProfessionals(): Observable<any> {
    return this._http.get('assets/json/pro1.json')
             .map(response => response.json())
             .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   public  createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' + btoa('hadrien:wewantUatMJG!EOTAF'));
    }

/*   public getProfessionals(): Observable<any> {
     let headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    return this._http.get('https://dev.myjobglasses.com/professionals?page=1&format=json', {headers: headers})
        .map(response => response.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }


   public getWeatherInCity(param: string): any {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + param + '&APPID=295594b2f0f74cb1eafdf26d818de19b' + '&units=metric')
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     } */
}
