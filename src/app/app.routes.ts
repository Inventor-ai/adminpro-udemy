import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';

const appRoutes: Routes = [
 { path: '', component: PagesComponent,
   children: [
       { path: 'dashboard', component: DashboardComponent },
       { path: 'graficas', component: Graficas1Component },
       { path: 'progress', component: ProgressComponent },
       { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Si se deja vacío re-dirige
    //    { path: '**', component: PagenofoundComponent } // Si no encuentra la ruta muestra esta página
   ]
 },
 { path: 'login', component: LoginComponent },
 { path: 'registro', component: RegisterComponent },
 // Es importante el orden de las rutas siguiemtes:
//  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Si se deja vacío re-dirige
 { path: '**', component: PagenofoundComponent } // Si no encuentra la ruta muestra esta página
 // De lo contrario ignora la redirección si está vacía el URL.
];

export const APP_ROUTES = RouterModule.forRoot ( appRoutes, {useHash: true} );
