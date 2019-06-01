import { Component, OnInit } from '@angular/core';
import { Interval, ExponencialRegressionResults } from 'src/app/models/models';

@Component({
  selector: 'app-exponencial-regression',
  templateUrl: './exponencial-regression.page.html',
  styleUrls: ['./exponencial-regression.page.scss'],
})
export class ExponencialRegressionPage {
  newInterval: Interval;
  intervals: any[];
  result: ExponencialRegressionResults;

  constructor() {
    this.newInterval = {x: 0, y: 0};
    this.result = {a: 0, b: 0, lowerA: 0, lowerB: 0, delta: 0 , discrepanciaCuadrada: 0, sigmaCuadrada: 0, errorA: 0,
      errorB: 0, errorLowerA: 0, errorLowerB: 0, coeficienteCorrelacion: 0 };
    this.intervals = [];
  }
  addInterval() {
    this.intervals.push({x: this.newInterval.x, y: this.newInterval.y});
    this.linearRegresion();
  }

  removeInterval(interval: any) {
    this.intervals.splice(this.intervals.indexOf(interval) - 1);
    this.linearRegresion();
  }

  linearRegresion() {
    let sumX = 0;
    let sumY = 0;
    let medY = 0;
    let medX = 0;
    let sumXX = 0;
    let sumYY = 0;
    let sumXY = 0;
    let n = 0;
    n = this.intervals.length;
    for (const interval of this.intervals ) {
      sumX += interval.x;
      sumY += Math.log(interval.y);
      sumXX += interval.x * interval.x;
      sumYY += Math.log(interval.y) * Math.log(interval.y);
      sumXY += interval.x * Math.log(interval.y);
    }
    medY = (sumY) / n;
    medX = (sumX) / n;
    this.result.b = ((n * sumXY) - (sumX * sumY)) / ((n * sumXX) - Math.pow(sumX, 2));
    this.result.a = medY - (this.result.b * medX);
    
    this.result.lowerA = Math.exp(this.result.a);
    this.result.lowerB = this.result.b;
   
  }

}
