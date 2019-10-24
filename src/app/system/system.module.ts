import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserbarComponent } from './components/userbar/userbar.component';
import { SystemComponent } from './components/system/system.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatMenuModule
  ],
  declarations: [SidebarComponent, UserbarComponent, SystemComponent]
})
export class SystemModule { }
