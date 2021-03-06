import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';


import { FashionListingPage } from './fashion-listing.page';
import { FashionListingResolver } from './fashion-listing.resolver';
import { FashionService } from '../fashion.service';
import { ComponentsModule } from './../../../components/components.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: FashionListingPage,
//     resolve: {
//       data: FashionListingResolver
//     }
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FashionListingPage,
        resolve: {
          data: FashionListingResolver
        }
      }
    ]),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [FashionListingPage],
  providers: [
    FashionListingResolver,
    FashionService
  ]
})
export class FashionListingPageModule { }
