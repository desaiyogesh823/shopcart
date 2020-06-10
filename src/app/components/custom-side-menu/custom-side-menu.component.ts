import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SideMenuOption } from './models/side-menu-option';
import { MenuController, Platform, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { apiService } from './../../service/api.service';
import { CommonService } from './../../service/common.service';

@Component({
    selector: 'custom-side-menu',
    templateUrl: './custom-side-menu.component.html',
    styleUrls: ['./custom-side-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomSideMenuComponent {
    optionHeight = 45;
    paddingLeft = 16;
    @Input() menuList: Array<SideMenuOption>;

    constructor(
        private menu: MenuController,
        public auth: apiService,
        private navCtrl: NavController,
        private _commonService: CommonService,
        public toastController: ToastController,
    ) {
    }

    ionViewDidEnter() {
    }

    ionViewDidLeave() {
        this.navCtrl.navigateRoot('tab');
    }

    toggle(item) {
        item.expanded = !item.expanded;
    }

    logOut() {
        this.menu.close();
        localStorage.removeItem('UserName');
        localStorage.setItem("old_token", localStorage.getItem("token"));
        localStorage.removeItem('token');
        this.navCtrl.navigateRoot(['login']);
        this.auth.logout().subscribe(
            res => this.logoutSuccessfully(res),
            error => error
        )
    }


    logoutSuccessfully(res) {
        localStorage.removeItem('token');
        localStorage.removeItem('old_token');
        localStorage.removeItem('OnboardingEnabled');
    }

    async comingSoon() {
        this.menu.enable(true);
        this.menu.open();
        const toast = await this.toastController.create({
            message: 'coming soon...!',
            duration: 2500,
            position: "bottom",
            mode: "ios"
        });
        toast.present();
    }
}
