import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: string = 'ajustes';
  ajustes: Ajustes = { // Establece la configuración por defecto
    temaURL: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  // Esto se ejecuta con sólo inyectar el servicio en el componente
  constructor( @Inject( DOCUMENT) private doc ) {
    this.readSettings();
  }

  readSettings( ) {
    if (localStorage.getItem (this.settings)) {
      // console.log('Leyendo ajustes del localstorage');
      this.ajustes = JSON.parse( localStorage.getItem (this.settings) );
    } else {
      // console.log('Usando Valores por defecto');
    }
    this.aplicarTema ( this.ajustes.tema );
  }

  aplicarTema( tema: string ) {
    const url = `assets/css/colors/${tema}.css`;
    this.ajustes.tema = tema;
    this.ajustes.temaURL = url;
    // console.log('settingService.aplicarTema', {tema} );
    this.saveSettings();
    this.doc.getElementById('tema').setAttribute('href', url);
  }

  private saveSettings( ) {
    // console.log('Guardando ajustes en el localstorage');
    localStorage.setItem (this.settings, JSON.stringify( this.ajustes ));
  }

}

// Restricción definida de los valores del tema
interface Ajustes {
  temaURL: string;
  tema: string;
}
