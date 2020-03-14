import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('titulo') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() nuevoValor: EventEmitter <number> = new EventEmitter() ; // 1/2
  @ViewChild('txtProgress') txtProgress: ElementRef;
  // Obtiene una referencia sin importar el elemento en el que está el foco

  constructor() {
    // console.log('constructor leyenda', this.leyenda);
    // console.log('constructor progreso', this.progreso);
  }

  ngOnInit(): void {
    // console.log('ngOnInit leyenda', this.leyenda);
    // console.log('ngOnInit progreso', this.progreso);
  }

  cambiarValor_VideoOrigenAndOwn41( valor: number ) { //
    const resultado = Number (this.progreso) + valor;
    if (resultado >= 100 && valor > 0) {
        this.progreso = 100;
        return;
    }
    if (resultado <= 0  && valor < 0) {
        this.progreso = 0;
        // this.progreso = 100; // Línea de práctica
        return;
    }
    this.progreso = resultado;
    this.nuevoValor.emit (this.progreso); // 2/2
  }

  cambiarValorTmp2( valor: number ) {
    // let resultado = Number (this.progreso) + valor;
    if (Number (this.progreso) >= 100 && valor > 0) {
        this.progreso = 100;
        // return;
    }
    if (Number (this.progreso) <= 0  && valor < 0) {
        this.progreso = 0;
        // return;
    }
    // this.progreso = Number (this.progreso);
    console.log('cambiarValor:', valor);
    console.log('cambiarValor:', this.progreso);
    this.nuevoValor.emit (this.progreso); // 2/2
  }

  cambiarValorTmp( valor: number ) {
    if (this.progreso >= 100 && valor > 0) {
        this.progreso = 100;
        return;
    }
    if (this.progreso <= 0  && valor < 0) {
        this.progreso = 0;
        return;
    }
    this.progreso = this.progreso + valor;
    this.nuevoValor.emit (this.progreso); // 2/2
  }

  // Funciona convirtiendo la entrada en número
  cambiarValor( valor: number ) {
    let resultado = Number (this.progreso) + valor;
    if (resultado >= 100 && valor > 0) {
        resultado = 100;
        // return;
    }
    if (resultado <= 0  && valor < 0) {
        resultado = 0;
        // return;
    }
    // Porque resultado es local y su valor sólo existe en esta rutina no en la instancia del obj
    this.progreso = resultado; // Esto actualiza la propiedad del objeto
    this.nuevoValor.emit (this.progreso); // 2/2
    this.txtProgress.nativeElement.focus(); // Coloca el foco en el input después de pulsar el botón
  }

  onChanges( newValue: number) {
    // console.log( 'event', event ); // Deprecaetd but it works on Chrome & Firefox
    // let elemHTML: any = document.getElementsByName('progreso')[0];  // elemHTML 1/3
    console.log( this.txtProgress );
    // console.log( 'elemHTML.value', elemHTML.value );                // elemHTML 2/3
    console.log( { newValue } );
    if (newValue >= 100) {
        this.progreso = 100;
    } else if (newValue <= 0) {
        this.progreso = 0;
    } else {
        this.progreso = newValue;
    }
    // Evita que la cadena de números sea mayor a 100
    // pero sólo funciona si el objeto es único en el document
    // elemHTML.value = this.progreso;                                 // elemHTML 3/3
    this.txtProgress.nativeElement.value = this.progreso;
    this.nuevoValor.emit (this.progreso); // 2/2
  }

}
