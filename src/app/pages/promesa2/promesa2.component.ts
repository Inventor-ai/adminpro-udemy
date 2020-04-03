import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesa2',
  templateUrl: './promesa2.component.html',
  styles: []
})
export class Promesa2Component implements OnInit {

  constructor() {
    this.contar3().then(
      msg => console.log('Terminate OK', msg)
    ).catch(
      error => console.log('Terminate error', error)
    );
  }

  ngOnInit(): void {
  }

  contar3() {
    return new Promise <boolean>( (resolve, reject) => {
      let contador = 0 ;
      const intervalo = setInterval (
        () => {
          contador += 1;
          console.log('contador', contador);
          if (contador === 3) {
            // resolve();
            resolve( true );
            // reject();
            // reject( false );
            clearInterval (intervalo);
          }
        },
      1000);
    });
  }

}
