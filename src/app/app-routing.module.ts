import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //shop cart
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.loginPageModule) },
  { path: 'signup', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.signUpPageModule) },
  { path: 'tab', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'welcome', loadChildren: () => import('./shop-cart/welcome/welcome.module').then(m => m.welcomePageModule) },
  { path: 'fashion/:productId', loadChildren: () => import('./shop-cart/fashion/details/fashion-details.module').then(m => m.FashionDetailsPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
