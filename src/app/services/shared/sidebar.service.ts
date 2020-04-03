import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard'   },
        { titulo: 'Progress Bar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas'     },
        { titulo: 'Promesas', url: '/promesas'     },
        { titulo: 'Promesa2', url: '/promesa2'     },
        { titulo: 'RxJs'    , url: '/rxjs'         },
        { titulo: 'RxJsFx'  , url: '/rxjsfx'       }
      ]
      // Rutas tomadas del archivo: page.routes.ts  ¿Por qué éstas rutas tienen '/' y en el archivo no?
      // Se le agregó una '/' a las rutas para que Angular no las agregue a la ruta actual
    }
  ];

  constructor() { }
}

/*
// ¿Incorporar la creación de este objeto al router?
    { path: 'dashboard',      component: DashboardComponent, data: { titulo: 'Dashboard'} },
    { path: 'progress',       component: ProgressComponent, data: { titulo: 'Progress Bar'}  },
    { path: 'graficas',       component: Graficas1Component, data: { titulo: 'Gráficas'} },
    { path: 'accountSetting', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema'} },
    { path: 'promesas',       component: PromesasComponent, data: { titulo: 'Promesas'}  },
    { path: 'promesa2',       component: Promesa2Component, data: { titulo: 'Promesas2'}  },
    { path: 'rxjs'    ,       component: RxjsComponent, data: { titulo: 'RxJs'}      },
    { path: 'rxjsfx'  ,       component: RxjsfxComponent, data: { titulo: 'RxJsFx'}    },
    // { path: 'progress2',  component: Progress2Component  },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

*/
