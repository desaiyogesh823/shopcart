import { Component, ViewChildren, QueryList } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController, Platform, NavController } from '@ionic/angular';
import { apiService } from './service/api.service';
import { CommonService } from './service/common.service';
import { Subscription } from 'rxjs';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.scss',
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ]
})
export class AppComponent {
  sub: Subscription = new Subscription();
  authToken: any;
  public pageList = [
    {
      displayText: 'Men’s wear', url: ''
    },
    {
      iconName: 'home', displayText: 'Women’s wear', expanded: false, hasChild: true,
      subOptions: [
        { displayText: 'Wallet & Bags', url: '' },
        { displayText: 'Western wear', url: '' },
        { displayText: 'Jewellery', url: '' }
      ]
    },
    {
      displayText: 'Accesories', url: ''
    },
    {
      displayText: 'Track order', url: ''
    },
    {
      displayText: 'Account details', url: ''
    },
    {
      displayText: 'Settings', url: ''
    },
    {
      displayText: 'Sign out', url: 'login'
    }
  ];
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    private router: Router,
    public menu: MenuController,
    public auth: apiService,
    private _commonService: CommonService,


  ) {
    this.initializeApp();
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.statusBar.backgroundColorByHexString('#FFFFFF');
      // this.menu.enable(false);
      // this.splashScreen.hide();
      this.navCtrl.navigateRoot(['welcome']);
      // if (localStorage.getItem('token')) {
      //   if (!this.platform.is('cordova')) {
      //     this.navCtrl.navigateRoot(['tab']);
      //   } else {
      //     let subscriptionDate = JSON.parse(localStorage.getItem("SubsDetails"))
      //     if (subscriptionDate) {
      //       this.navCtrl.navigateRoot(['tab']);
      //     } else {
      //       this.navCtrl.navigateRoot(['welcome']);
      //     }
      //   }
      // } else {
      //   this.navCtrl.navigateRoot(['welcome']);
      // }
    });
  }


  back() {
    this.menu.close();
  }

  editprofile() {
    this.menu.close();
    this.menu.enable(false);
    this.router.navigate(['edit-profile']);
  }

}