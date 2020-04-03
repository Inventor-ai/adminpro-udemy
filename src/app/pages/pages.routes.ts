import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { Progress2Component } from './progress2/progress2.component';
import { PromesasComponent } from './promesas/promesas.component';
import { Promesa2Component } from './promesa2/promesa2.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsfxComponent } from './rxjsfx/rxjsfx.component';

const pagesRoutes: Routes = [
  { path: '', component: PagesComponent,
      children: [
        { path: 'dashboard',      component: DashboardComponent,       data: { titulo: 'Dashboard',
                                                                               descripcion: 'Pnael de control principal' } },
        { path: 'progress',       component: ProgressComponent,        data: { titulo: 'Progress Bar',
                                                                               descripcion: 'Barras de progreso' } },
        { path: 'graficas',       component: Graficas1Component,       data: { titulo: 'Gráficas',
                                                                               descripcion: 'Gráficas de dona' } },
        { path: 'accountSetting', component: AccountSettingsComponent, data: { titulo: 'Account Setting',
                                                                               descripcion: 'Selección del tema' } },
        { path: 'promesas',       component: PromesasComponent,        data: { titulo: 'Promesas',
                                                                               descripcion: 'Demostración de promesas' } },
        { path: 'promesa2',       component: Promesa2Component,        data: { titulo: 'Promesas2',
                                                                               descripcion: 'Otra demostración de promesas' } },
        { path: 'rxjs'    ,       component: RxjsComponent,            data: { titulo: 'RxJs',
                                                                               descripcion: 'Demostración de Observables' } },
        { path: 'rxjsfx'  ,       component: RxjsfxComponent,          data: { titulo: 'RxJsFx',
                                                                               descripcion: 'Ejercicio de Observables' } },
        // { path: 'progress2',  component: Progress2Component  },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild ( pagesRoutes );
/*
 { titulo: 'Dashboard', url: '/dashboard'   },
        { titulo: 'Progress Bar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas'     },
        { titulo: 'Promesas', url: '/promesas'     },
        { titulo: 'Promesa2', url: '/promesa2'     },
        { titulo: 'RxJs'    , url: '/rxjs'         },
        { titulo: 'RxJsFx'  , url: '/rxjsfx'       }
*/
