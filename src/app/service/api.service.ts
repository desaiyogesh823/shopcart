import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { throwError as _observableThrow, of as _observableOf, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { LoaderService } from './loader.service';
import * as _ from 'lodash';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { MenuController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})

export class apiService {
  private BASEURL = 'http://localhost:2152/api/'; //Live
  private loginUrl = this.BASEURL + 'users/login-after-subscription';
  private logOutUrl = this.BASEURL + 'users/logout';
  private signupOTPUrl = this.BASEURL + 'users/signup-otp';
  private registerDetailsUrl = this.BASEURL + 'users/signup';
  private auditUrl = this.BASEURL + 'audit/add-audit-data';
  constructor(
    public router: Router,
    private httpService: HttpService,
    private _loaderService: LoaderService,
    public _commonService: CommonService,
    public menuCtrl: MenuController
  ) { }


  menu() {
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
  }

  logout() {
    return this.httpService.get(this.logOutUrl);
  }


  comingSoon() {
    swal({
      title: "<img src='assets/GIF.gif' width='100px'>",
      text: "<strong style='font-size:12pt;'>coming soon</strong>",
      confirmButtonColor: "#00acec",
      confirmButtonText: "OK",
      closeOnConfirm: false,
      html: true
    });
  }

  //signup user with phone number
  signup(data: any) {
    return this.httpService.dopost(this.signupOTPUrl, data);
  }


  //register user details
  register(data: any) {
    return this.httpService.dopost(this.registerDetailsUrl, data);
  }

  //Login user 
  login(data: any) {
    return this.httpService.dopost(this.loginUrl, data)
  }
}