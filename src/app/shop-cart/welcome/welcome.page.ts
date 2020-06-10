import { Component, ViewChild, ElementRef, Renderer, NgZone, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController, NavController, ModalController, Platform, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
import * as moment from 'moment';
import { apiService } from './../../service/api.service';
import { LoaderService } from './../../service/loader.service';
import * as _ from 'lodash';
import { CommonService } from './../../service/common.service';
import { Device } from '@ionic-native/device/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: [
    './styles/welcome.page.scss',
    './styles/welcome.shell.scss'
  ]
})

export class welcomePage {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  slides = ['assets/shop-cart/slide-1.gif', 'assets/shop-cart/slide-2.gif', 'assets/shop-cart/Slide-3.png']

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
    private _loaderService: LoaderService,
    private _commonService: CommonService,
    public device: Device,
    public splashScreen: SplashScreen,
  ) {
    this.platform.ready().then(() => {
      setTimeout(()=>{
        this.menu.enable(false);
        this.splashScreen.hide();
      },500);
    });
   }

  ionViewDidEnter() {

  }

  getStarted(){
    this.navCtrl.navigateRoot(['login']);
  }

}