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
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Progress Bar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graficas' },
      ]
      // Rutas tomadas del archivo: page.routes.ts  ¿Por qué éstas rutas tienen '/' y en el archivo no?
      // Se le agregó una '/' a las rutas para que Angular no las agregue a la ruta actual
    }
  ];

  constructor() { }
}
