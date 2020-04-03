import { Component, OnInit, OnDestroy } from '@angular/core';
// Se utiliza SÓLO en desarrollo porque importa TODO rxjs
import { Observable, Subscriber, Subscription } from 'rxjs';

// Recomendado p/producción porque es más ligero. Sólo importa el Observable
// import { Observable } from 'rxjs/internal/Observable';
// import { Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
// import { Subscriber, Subscription} from 'rxjs/index'; // index.d.ts | index <directory>


// import { Subscriber, Subscription} from 'rxjs/internal-compatibility';
// import { Subscriber, Subscription} from 'rxjs/src';  // No funciona para Observers

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnDestroy {

  // subscription: Subscription = new Subscription();
  subscription: Subscription;
  killInterval: boolean = false;

  constructor() {
    this.subscription =
    this.fxRetObs()
        // .pipe( retry (2) )
        .subscribe(
            (data ) => console.log('Escuchando:', data),
            (error) => console.log('Hubo error:', error),
            () => console.log('Termino')
        );
  }

  fxRetObs(): Observable <any> {
    return new Observable ( ( observer: Subscriber <any> ) => {
      let contador = 0;
      const intervalo = setInterval ( () => {
        contador += 1;
        console.log( 'contador', contador);
        const salida = { valor: contador} ;
        // observer.next ( contador );
        observer.next ( salida );  // Nueva API imaginaria

        // Bloque agregado para poder cancelar el Observable
        console.log('killInterval', this.killInterval);
        if ( this.killInterval ) {
            clearInterval(intervalo);  // ¿Indispensaable para que funcione el unsubscribe?
            observer.complete();
        }

        // if ( contador === 3 ) {
        //      clearInterval ( intervalo );
        //      observer.complete();
        // }

      //   if ( contador === 2) {
      //        clearInterval(intervalo);
      //        observer.error ('Auxilio!');
      //   }
      }
      , 1000);
    })
    .pipe (
           map( ( resp ) => resp.valor ),
           filter ( ( valor, index ) => {
             if ( ( valor % 2 ) === 1 ) {
                 return true;
             } else {
                 return false;
             }
           }),
    );
  }

  fxRetObs01(): Observable <any> {
    // fxRetObs(): Observable <number> {
    const obs = new Observable ( ( observer: Subscriber <any> ) => {
    // const obs = new Observable ( ( observer: Subscriber <number> ) => {
      let contador = 0;
      const intervalo = setInterval ( () => {
        contador += 1;
        console.log( 'contador', contador);
        const salida = { valor: contador} ;
        // observer.next ( contador );
        observer.next ( salida );  // Nueva API imaginaria

        // if ( contador === 3 ) {
        //      clearInterval ( intervalo );
        //      observer.complete();
        // }

      //   if ( contador === 2) {
      //        clearInterval(intervalo);
      //        observer.error ('Auxilio!');
      //   }
      }
      , 1000);
    });
    // return obs;
    return obs.pipe (
                  // Lección 77. Operador map de los Observables
                  //   Modificaciòn para aplicar el operador map
                  // Funcionan igual. Se dejó funcionando la corta
                   // Versión larga
                  // map( ( resp: any ) => { return resp.valor; } )
                  // Versión corta
                  // map( ( resp: any ) => resp.valor )
                  // Versión más corta
                  map( ( resp ) => resp.valor ),
                  // Lección 78. Operador filter de los Observables
                  filter ( ( valor, index ) => {
                    // console.log('filter', valor, index, valor % 2);  // showFilter On/Off
                    if ( ( valor % 2 ) === 1 ) {
                      //  console.log('impar', valor );  // showFilter On/Off
                       return true;
                    } else {
                      //  console.log('par', valor );  // showFilter On/Off
                       //  return true;
                       return false;
                    }
                  }),
           );
  }

/*
  constructor() {
    const obs = new Observable ( observer => {
      let contador = 0;
      const intervalo = setInterval ( () => {
        contador += 1;
        console.log('contador', contador);
        observer.next ( contador );
        if (contador === 3) {
            clearInterval (intervalo);
            observer.complete();
        }

        if (contador === 2) {
            clearInterval (intervalo);
            observer.error('Auxilio');
        }
      }, 1000);
    });

    // Primer callback del subscribe - next()
    // obs.subscribe ( nums => {
    //   console.log(' Subs', nums );
    // });
    // Mismo Callback resumido en una línea
    obs.pipe(
      retry(3)  // retry  DEBE importarse de rxjs/operators
    )
    .subscribe (
      nums =>  console.log('Subs', nums ),
      error => console.error('Error en el observable:', error),
      () => console.log('El observador terminó')
    );
  }
*/
  ngOnDestroy(): void {
    // Esta línea del video Lección 80. unsubscribe
    // this.subscription.unsubscribe(); // Así nada más no detiene el proceso
    this.doStop();
    console.log('La página se va a cerrar');
  }

  doStop(): void {
    console.log('Stopping...');
    this.killInterval = true;
    console.log('doStop 0', this.subscription.closed);
    // console.log('this.subscription.contador', this.subscription.contador);
    this.subscription.unsubscribe();
    console.log('doStop 1', this.subscription.closed);
    // this.subscription = null;
  }

}
