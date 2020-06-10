import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    isLoading: boolean = false;

    constructor(public loadingController: LoadingController) { }

    async present() {
        this.isLoading = true;
        return await this.loadingController.create({
            spinner: 'crescent',
        }).then(a => {
            a.present().then(() => {
                console.log('presented');
                if (!this.isLoading) {
                    a.dismiss().then(() => console.log('abort presenting'));
                }
            }).catch(() => {
                console.log('abort');
            });
        });
    }

    async dismiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss().then(() => console.log('dismissed')).catch(() => { console.log('abort') });
    }
}