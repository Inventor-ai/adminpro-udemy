import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress2',
  templateUrl: './progress2.component.html',
  styles: []
})
export class Progress2Component implements OnInit {
  valor: number;
  constructor() { }

  ngOnInit(): void {
    this.valor = 0;
  }

  plus() {
    this.valor += Number(5);
  }

  res() {
    this.valor -= Number(5);
  }
}
