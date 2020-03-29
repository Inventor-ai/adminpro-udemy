import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminPro';

  constructor( public currentTheme: SettingsService ) {
    // currentTheme.readSettings(); // Se agregó al constructor del servicio
    // console.log('app.component.ts');
    // console.log(currentTheme.ajustes.tema);
    // console.log(currentTheme.ajustes.temaURL);
  }
}
