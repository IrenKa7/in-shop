import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './shop/shop.module#ShopModule'
},

{
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
},

{
  path: 'system',
  loadChildren: './system/system.module#SystemModule'
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
