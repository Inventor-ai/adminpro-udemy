import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
/*
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register.component';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PagenofoundComponent } from '../shared/pagenofound/pagenofound.component';
*/
@NgModule ({
   declarations: [ // Components
    //  LoginComponent,
    //  RegisterComponent,
    //  PagesComponent,
    //  SidebarComponent,
    //  BreadcrumbsComponent,
    //  HeaderComponent,
    //  PagenofoundComponent

     DashboardComponent,
     Graficas1Component,
     ProgressComponent
   ]
})
export class PagesModule {}
