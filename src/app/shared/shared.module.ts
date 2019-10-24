import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TableComponent } from './components/table/table.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WindowComponent } from './components/window/window.component';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [TableComponent, WindowComponent],
  exports: [TableComponent, WindowComponent, ReactiveFormsModule, FormsModule],
  providers: [HttpClient]
})
export class SharedModule { }
