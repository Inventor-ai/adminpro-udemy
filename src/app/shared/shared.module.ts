import { NgModule } from '@angular/core';

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
  ]
})
export class SharedModule {}
