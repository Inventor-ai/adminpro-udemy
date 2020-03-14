import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
// import { ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
/*
  @Input('leyenda') public titulo: string = 'Título/Leyenda';
  @Input('donaEtiquetas') public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('donaDatos') public doughnutChartData: number[] = [350, 450, 100];
  // @Input('dona') public doughnutChartType: ChartType = 'doughnut';
*/
  @Input('leyenda') titulo: string = 'Título/Leyenda';
  @Input('donaEtiquetas') doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('donaDatos') doughnutChartData: number[] = [350, 450, 100];
  // @Input('dona') doughnutChartType: ChartType = 'doughnut';
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
