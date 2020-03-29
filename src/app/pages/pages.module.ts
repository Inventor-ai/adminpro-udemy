import { NgModule } from '@angular/core';
/*
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PagenofoundComponent } from '../shared/pagenofound/pagenofound.component';
*/
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'; // Incorporado para usar *ngFor donasCharts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
// import { Progress2Component } from './progress2/progress2.component';
import { PAGES_ROUTES } from './pages.routes';

// Importacion temporal p/desarrollarlo
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule ({
   declarations: [ // Components
     PagesComponent,
     DashboardComponent,
     Graficas1Component,
     ProgressComponent,
    //  Progress2Component,
     IncrementadorComponent,  // Importacion temporal p/desarrollarlo
     GraficoDonaComponent,
     AccountSettingsComponent
   ],
   imports: [
     SharedModule,
     PAGES_ROUTES,
     FormsModule,  // Activa y permite utilizar [(ngModel)]
     ChartsModule,
     BrowserModule  // Para poder usar la directiva *ngFor
   ],
   exports: [      // Permite a otros Componentes fuera de este módulo usar estos componentes
     PagesComponent,
     DashboardComponent,
     Graficas1Component,
     ProgressComponent
   ]
})
export class PagesModule {}
