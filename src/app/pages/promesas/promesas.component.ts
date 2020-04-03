import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    console.log('Starting promises...');
    const promesa = new Promise ( ( resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval( () => {
          // contador = + 1;
          contador += 1;
          // contador = contador + 1;
          console.log('contador:', contador);
          if ( contador === 3 ) {
              // resolve();
              resolve('OK!');
              // reject();                   // Esto genera un 'undefined'
              // reject('It´s just an error');  // Envía un mensaje de error
              clearInterval(intervalo);
          }
      } , 1000);
    } );

//  Función que está escuchando la promesa
/*
    // Esta es una forma de hacerlo.
    // Separando el catch con una coma después del resolve.
    promesa.then (
      // () => {
      //   console.log('Terminate Ok');
      // },

      msg => {
        console.log('Terminate', msg);
      },

      error => {
        console.log('Terminate Failed', error);
      }
    );
*/
// La otra, es un poco más limpia y clara delimitando y especificando cada uno
    promesa.then (
      // () => {
      //   console.log('Terminate Ok');
      // },
      msg => {
        console.log('Terminate', msg);
      },
    ).catch (
        error => {
          console.error('Promise Terminate Failed', error);
        }
    );
/*
*/
  }

  ngOnInit(): void {
  }

}
