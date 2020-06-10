import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO: move to a shared module instead
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from './../../components/components.module';
import { MaterialModule } from './../../material.module';
import { homePage } from './home.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: homePage
      }
    ]),
    ComponentsModule,
    MaterialModule
  ],
  declarations: [homePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class homePageModule { }
