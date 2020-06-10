import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  alertPresent: boolean = false;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
  ) {

  }

  getScheduleTime(obj) {
    let time1 = moment(new Date(obj.startDateTime)).format('HH:mm:ss').split(":");
    let time2 = moment(new Date(obj.endDateTime)).format('HH:mm:ss').split(":");
    let startTime = moment(new Date().setUTCHours(parseInt(time1[0]), parseInt(time1[1]), parseInt(time1[2]))).format('h:mm a');
    let endTime = moment(new Date().setUTCHours(parseInt(time2[0]), parseInt(time2[1]), parseInt(time2[2]))).format('h:mm a');
    return startTime + " - " + endTime;
  }

  async showAlert(title: string) {
    let alert = await this.alertCtrl.create({
      message: title,
      buttons: ['OK']
    });
    await alert.present();
  }

  async yesOrNo(header: string, message: string, callback: Function) {
    if (!this.alertPresent) {
      let alertctrl = await this.alertCtrl.create({
        header: header,
        message: message,
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.alertPresent = false;
              callback(false);
            }
          }, {
            text: 'Yes',
            handler: () => {
              this.alertPresent = false;
              callback(true);
            }
          }
        ]
      });
      this.alertPresent = true;
      await alertctrl.present();
    } else {
      this.alertPresent = false;
      await this.alertCtrl.dismiss();
    }
  }



  async alertView(header: string, message: string, callback: Function) {
    if (!this.alertPresent) {
      let alertctrl = await this.alertCtrl.create({
        header: header,
        mode: "ios",
        message: message,
        buttons: [
          {
            text: 'cancel',
            role: 'cancel',
            handler: () => {
              this.alertPresent = false;
              callback(false);
            }
          }, {
            text: 'View',
            handler: () => {
              this.alertPresent = false;
              callback(true);
            }
          }
        ]
      });
      this.alertPresent = true;
      await alertctrl.present();
    } else {
      this.alertPresent = false;
      await this.alertCtrl.dismiss();
    }
  }

  async checkError(title: string, callback: Function) {
    let alert = await this.alertCtrl.create({
      header: title,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            callback(true);
          }
        }
      ]
    });
    await alert.present();
  }

  handleError(errorObj: any) {
    if (navigator.onLine) {
      if (errorObj.error.error.code == 401) {
        this.checkError("Your session has expired. Please Login to Continue.", () => {
          this.router.navigate(['auth/login']);
        });
      } else {
        this.showAlert(errorObj.error.error.message);
      }
    } else {
      this.showAlert("Oh.!!! Network is Unavailable... Please try again Later");
    }
  }

}
