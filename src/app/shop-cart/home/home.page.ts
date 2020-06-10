import { Component, ViewChild, ElementRef, Renderer, NgZone, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController, NavController, ModalController, Platform, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
import * as moment from 'moment';
import { apiService } from './../../service/api.service';
import { LoaderService } from './../../service/loader.service';
import * as _ from 'lodash';
import { CommonService } from './../../service/common.service';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: [
    './styles/home.page.scss',
    './styles/home.shell.scss',
    './styles/home.responsive.scss'
  ]
})

export class homePage {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  slides = ['assets/shop-cart/banner.png', 'assets/shop-cart/online.jpg', 'assets/shop-cart/online2.jpg']

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  iosEnabled: boolean = false;
  btnEnabled: boolean = false;
  timeLeft: number = 10;
  constructor(
    public router: Router,
    public menu: MenuController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public platform: Platform,
    public auth: apiService,
    public _loaderService: LoaderService,
    public _commonService: CommonService,
    public device: Device,
  ) { }

  ionViewDidEnter() {

  }

  getStarted() {
    this.navCtrl.navigateRoot(['login']);
  }

}