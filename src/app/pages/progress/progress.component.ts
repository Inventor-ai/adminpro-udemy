import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso: number = 75;
/*
  @Input() barBlue: number = 50;
  @Input() barGreen: number = 25;
*/
  barBlue: number = 75;
  barGreen: number = 25;

  constructor() { }

  ngOnInit(): void {
    // this.barGreen = 25;
    // this.barBlue = 75;
  }

  sumar() {
    if (this.progreso < 100) {
        this.progreso = this.progreso + 5;
        // this.progreso = + 5;
    }
  }

  restar() {
    if (this.progreso > 0) {
        this.progreso = this.progreso - 5;
        // this.progreso = - 5;
    }
  }

 // Código del video: Al llegar a alguno de los límites deja de responder
  cambiarValor_CurseTry1( valor ) {
    if (this.progreso >= 100) {
        return;
    }
    if (this.progreso <= 0) {
        return;
    }
    this.progreso = this.progreso + valor;
  }

  cambiarValor_CurseTry2( valor ) {
    if (this.progreso >= 100) {
        this.progreso = 100;
        return;
    }
    if (this.progreso <= 0) {
        this.progreso = 0;
        return;
    }
    this.progreso = this.progreso + valor;
  }

  cambiarValor_MoveIt2Incrementador( valor: number ) {
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
  }

  cambiarValor_Q01( valor ) {
    if (this.progreso > 95) {
        this.progreso = 95;
    }
    if (this.progreso < 5) {
        this.progreso = 5;
    }
    this.progreso = this.progreso + valor;
  }

  cambiarValor_ownTry1( valor ) {
    if (this.progreso === 100 && valor > 0 ||
        this.progreso === 0   && valor < 0) {
        return;
    }
    this.progreso = Number (this.progreso) + valor;
  }

  // Rutina para monitorizar el fucnionamiento del evento recibido
  actualizar( $event: number) {
     console.log('actualizar: $event', $event);
  }


}
