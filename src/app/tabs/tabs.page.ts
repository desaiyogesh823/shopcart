import { Component } from '@angular/core';
import { MenuController, Platform, NavController } from '@ionic/angular';
import { apiService } from './../service/api.service';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  AppVersion: any;
  constructor(private menuCtrl: MenuController,
    public auth: apiService,
    private appVersion: AppVersion,
  ) {

  }

  open() {
  }

  profile() {
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
    this.appVersion.getVersionNumber().then((res) => {
      this.AppVersion = res;
    });
  }
}
