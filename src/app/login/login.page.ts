import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, MenuController, NavController, Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { Subscription } from 'rxjs';
import { apiService } from './../service/api.service';
import { LoaderService } from './../service/loader.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})

export class loginPage {
  hide = true;
  confirmPwdhide = true;
  loginForm: FormGroup;
  sub: Subscription = new Subscription();
  constructor(
    public router: Router,
    public modalController: ModalController,
    public menu: MenuController,
    private formBuilder: FormBuilder,
    public auth: apiService,
    public device: Device,
    public navCtrl: NavController,
    private _loaderService: LoaderService,
    public platform: Platform
  ) {

    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-zA-Z]{2,}$')])],
      Password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^(?=.*[A-Za-z0-9])[\\S]*')])],
    });
  }


  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.sub.unsubscribe();
  }


  goToSignin() {
    this.router.navigate(['login']);
  }

  login() {
    if (this.loginForm.valid) {
      // this._loaderService.present();
      this.navCtrl.navigateRoot(['tab/home']);
      // this.sub= this.auth.login(this.loginForm.value).subscribe(res=>{
      //   this.navCtrl.navigateRoot(['tab/home']);
      // })
    }
  }

  forgotPwd() {
    this.navCtrl.navigateForward('forgot-password');
  }

  skip() {
    this.navCtrl.navigateRoot(['tab/home']);
  }

  signup() {
    this.navCtrl.navigateForward('signup');
  }
}
