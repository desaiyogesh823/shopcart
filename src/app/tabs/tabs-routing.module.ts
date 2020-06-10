import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shop-cart/home/home.module').then(m => m.homePageModule)
          },
          {
            path: 'fashion',
            loadChildren: () =>
              import('../shop-cart/fashion/listing/fashion-listing.module').then(m => m.FashionListingPageModule)
          },
          {
            path: 'fashion1/:productId',
            loadChildren: () =>
              import('../shop-cart/fashion/details/fashion-details.module').then(m => m.FashionDetailsPageModule)
          },
        ]
      },
      {
        path: 'hot-offer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shop-cart/hot-offer/home.module').then(m => m.homePageModule)
          }
        ]
      },
      {
        path: 'my-cart',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shop-cart/my-cart/home.module').then(m => m.homePageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shop-cart/search/home.module').then(m => m.homePageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shop-cart/profile/home.module').then(m => m.homePageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
