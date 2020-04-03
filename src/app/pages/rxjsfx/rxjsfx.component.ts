import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjsfx',
  templateUrl: './rxjsfx.component.html',
  styles: []
})
export class RxjsfxComponent implements OnInit {

/*
// Constructor original en el video 74. Crear un Observable manualmente
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

  constructor() {
    // Versión en dos líneas del ejemplo del video. (Asignándolo a una varable)
    // const obs = this.regresaObservable();
    // obs.pipe( retry(2) ).subscribe( (dato) => console.log( dato ) );

    // Ejemplo del video
    // this.regresaObservable().pipe( retry(2) ).subscribe( (dato) => console.log( dato ) );

    // o también así
    // this.regresaObservable()
    // .pipe( retry(2) )
    // .subscribe( (dato) => console.log( dato ) );

    this.regresaObservable1()
    .pipe( retry(2) )
    .subscribe( (dato) => console.log( dato ) );

    // this.regresaObservable2()
    // .pipe( retry(2) )
    // .subscribe( (dato) => console.log( dato ) );
  }

  ngOnInit(): void {
  }

  // *
  regresaObservable1(): Observable<number> {
    return new Observable( observer => {
      let contador = 0;
      const intervalo = setInterval ( () => {
         contador += 1;
         console.log('obs', contador);
         observer.next ( contador );
         if (contador === 3) {
             clearInterval (intervalo);
             observer.complete();
         }
         if ( contador === 2 ) {
             clearInterval (intervalo);
             observer.error ('Auxilio!');
         }
      }
      , 1000);
    });
  }

  // *
  regresaObservable2(): Observable <number> {
    const obs = new Observable ( (observer: Subscriber <number>) => {
      let contador = 0;
      const intervalo = setInterval ( () => {
        contador += 1;
        console.log( 'Conteo:', contador );
        observer.next ( contador );
        if ( contador === 3 ) {
             clearInterval ( intervalo );
             observer.complete ();
        }
        if (contador === 2) {
            clearInterval(intervalo);
            observer.error ('Auxilio!');
        }
      }, 1000);
    } );
    return obs;
  }

  // *
  regresaObservable3(): Observable <number> {
    return new Observable ( (observer: Subscriber <number>) => {
      let contador = 0;
      const intervalo = setInterval ( () => {
        contador += 1;
        console.log( 'Conteo:', contador );
        observer.next ( contador );
        if ( contador === 3 ) {
             clearInterval ( intervalo );
             observer.complete ();
        }
        if (contador === 2) {
            clearInterval(intervalo);
            observer.error ('Auxilio!');
        }
      }, 1000);
    } );
  }

}
