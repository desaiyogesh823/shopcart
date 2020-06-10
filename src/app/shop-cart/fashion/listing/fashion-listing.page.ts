import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FashionListingModel } from './fashion-listing.model';
import { filterFormComponent } from './../filter-form/filter-form.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fashion-listing',
  templateUrl: './fashion-listing.page.html',
  styleUrls: [
    './styles/fashion-listing.page.scss',
    './styles/fashion-listing.shell.scss'
  ]
})
export class FashionListingPage implements OnInit {
  listing: FashionListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute, private router: Router, public modalCtrl: ModalController) { }

  public Btnlisting = [
    { displayText: 'Men’s wear' },
    { displayText: 'Wallet & Bags' },
    { displayText: 'Western wear' },
    { displayText: 'Jewellery' },
    { displayText: 'Women’s wear' }
  ];
  ngOnInit(): void {
    if (this.route && this.route.data) {
      // We resolved a promise for the data Observable
      const promiseObservable = this.route.data;
      console.log('Route Resolve Observable => promiseObservable: ', promiseObservable);

      if (promiseObservable) {
        promiseObservable.subscribe(promiseValue => {
          const dataObservable = promiseValue['data'];
          console.log('Subscribe to promiseObservable => dataObservable: ', dataObservable);

          if (dataObservable) {
            dataObservable.subscribe(observableValue => {
              const pageData: FashionListingModel = observableValue;
              // tslint:disable-next-line:max-line-length
              console.log('Subscribe to dataObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
              // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
              // and the real remote data once it gets fetched
              if (pageData) {
                this.listing = pageData;
              }
            });
          } else {
            console.warn('No dataObservable coming from Route Resolver promiseObservable');
          }
        });
      } else {
        console.warn('No promiseObservable coming from Route Resolver data');
      }
    } else {
      console.warn('No data coming from Route Resolver');
    }
  }

  navigate(item: any) {
    this.router.navigate([''])
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: filterFormComponent,
      componentProps: {
        event: 'edit'
      }
    });
    modal.onWillDismiss().then((dataReturned: any) => {
      // trigger when about to close the modal
      console.log('Receive: ', dataReturned);
      if (dataReturned.data) {
      }
    });
    return await modal.present().then(_ => {
      // triggered when opening the modal
      console.log('Sending: ', '');
    });

  }
}
