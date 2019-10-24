import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterceptorService } from './shared/services/interceptor.service';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { ApiService } from './shared/services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemService } from './shared/services/items.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ItemService,
    ApiService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
