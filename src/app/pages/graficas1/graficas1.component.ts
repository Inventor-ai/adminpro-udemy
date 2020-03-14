import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  /*
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  */

  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data:  [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data:  [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data:  [95, 5],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?'
    },
    grafico4: {
      labels: ['No', 'Si'],
      data:  [85, 15],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?'
    },
  };

  masDatos: any [] = [];

  constructor() { }

  ngOnInit(): void {
    this.data2Array();
  }

  data2Array() {
    const dataDona: any[] = [];
    for (const grafico in this.graficos) {
        //  dataDona.push ( { labels: [grafico],
        //                    data: [grafico],
        //                    leyenda: [grafico]
        //                } );
         dataDona.push ( { labels: this.graficos[grafico].labels,
                           data: this.graficos[grafico].data,
                           leyenda: this.graficos[grafico].leyenda
                       } );
    }
    console.log( {dataDona} );
    this.masDatos = dataDona;
  }

  data2Arrays() {
    const labels: string[] = [];
    const data: number[] = [];
    for (const grafico in this.graficos) {
      if (this.graficos.hasOwnProperty(grafico)) {
        const element = this.graficos[grafico];
        data.push(element.data);
        labels.push(element.labels);
      }
    }
    console.log( {data} );
    console.log( {labels} );
  }



  // // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
}
