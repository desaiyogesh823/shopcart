import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from './../../../components/components.module';

import { FashionDetailsPage } from './fashion-details.page';
import { FashionDetailsResolver } from './fashion-details.resolver';
import { FashionService } from '../fashion.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FashionDetailsPage,
        resolve: {
          data: FashionDetailsResolver
        }
      }
    ]),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [
    FashionDetailsPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    FashionDetailsResolver,
    FashionService
  ]
})
export class FashionDetailsPageModule { }


