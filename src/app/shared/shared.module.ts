import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule ({
  declarations: [
     LoginComponent,
     RegisterComponent,
     PagenofoundComponent,
     HeaderComponent,
     SidebarComponent,
     BreadcrumbsComponent
    ],
    exports: [
     LoginComponent,
     RegisterComponent,
     PagenofoundComponent,
     HeaderComponent,
     SidebarComponent,
     BreadcrumbsComponent,
    ],
    imports: [
      CommonModule,
      RouterModule,
     FormsModule
    ]
})
export class SharedModule {}
