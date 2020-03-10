import { NgModule } from '@angular/core';
/*
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PagenofoundComponent } from '../shared/pagenofound/pagenofound.component';
*/
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule ({
   declarations: [ // Components
     PagesComponent,
     DashboardComponent,
     Graficas1Component,
     ProgressComponent
   ],
   imports: [
     SharedModule,
     PAGES_ROUTES
   ],
   exports: [      // Permite a otros Componentes fuera de este módulo usar estos componentes
     PagesComponent,
     DashboardComponent,
     Graficas1Component,
     ProgressComponent
   ]
})
export class PagesModule {}
