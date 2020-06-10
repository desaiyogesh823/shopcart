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
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss']
})

export class signUpPage {
  hide = true;
  confirmPwdhide = true;
  registerForm: FormGroup;
  sub: Subscription = new Subscription();
  constructor(
    public router: Router,
    public modalController: ModalController,
    public menu: MenuController,
    private formBuilder: FormBuilder,
    public auth: apiService,
    public device: Device,
    public navCtrl: NavController,
    public platform: Platform
  ) {

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
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

  register() {
    if (this.registerForm.valid) {
      this.navCtrl.navigateRoot(['tab/home']);
    }
  }

  skip() {
    this.navCtrl.navigateRoot(['tab/home']);
  }
}
