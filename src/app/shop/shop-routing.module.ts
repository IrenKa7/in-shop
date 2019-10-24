import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';



const routes: Routes = [
  { path: '', redirectTo: '', component: MainComponent, pathMatch: 'full' },
  {
    path: '', component: MainComponent, children: [
      {path: 'home', component: HomeComponent },
      {path: 'home/:id', component: ProductDetailsComponent },
      {path: 'store', component: StoreComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'discounts', component: DiscountsComponent},
      {path: 'accessories', component: AccessoriesComponent},
      {path: 'shoes', component: ShoesComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
