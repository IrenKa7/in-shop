import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { StoreComponent } from './pages/store/store.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';



@NgModule({
  declarations: [HomeComponent,
    HeaderComponent,
     FooterComponent,
     StoreComponent,
     ContactsComponent,
     DiscountsComponent,
     AccessoriesComponent,
     ShoesComponent,
     MainComponent,
     ProductDetailsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
