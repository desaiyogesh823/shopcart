import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonRefreshNativeModule } from 'ion-refresh-native';
import { IonicModule, IonicRouteStrategy, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { apiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { MaterialModule } from './material.module';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { JsonpModule } from '@angular/http';
import { StarRatingModule } from 'ionic5-star-rating';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { filterFormComponent } from './shop-cart/fashion/filter-form/filter-form.component';

@NgModule({
  declarations: [AppComponent, filterFormComponent],
  entryComponents: [filterFormComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ rippleEffect: true }),
    IonicStorageModule.forRoot({
      name: '__sunshine',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    JsonpModule,
    StarRatingModule,
    IonRefreshNativeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    apiService,
    Device,
    AppVersion,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
