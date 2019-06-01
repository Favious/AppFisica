import { Component, OnInit } from '@angular/core';
import { Interval, ExponencialRegressionResults } from 'src/app/models/models';

@Component({
  selector: 'app-potencial-regression',
  templateUrl: './potencial-regression.page.html',
  styleUrls: ['./potencial-regression.page.scss'],
})
export class PotencialRegressionPage {

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
    let sumXX = 0;
    let sumYY = 0;
    let sumXY = 0;
    let n = 0;
    n = this.intervals.length;
    for (const interval of this.intervals ) {
      sumX += Math.log10(interval.x);
      sumY += Math.log10(interval.y);
      sumXX += Math.log10(interval.x) * Math.log10(interval.x);
      sumYY += Math.log10(interval.y) * Math.log10(interval.y);
      sumXY += Math.log10(interval.x) * Math.log10(interval.y);
    }
    this.result.a = ((sumY * sumXX) - (sumXY * sumX)) / ((n * sumXX) - (sumX * sumX));
    this.result.b = ((n * sumXY) - (sumX * sumY)) / ((n * sumXX) - (sumX * sumX));
    this.result.delta = (n * sumXX) - (sumX * sumX);
    this.result.discrepanciaCuadrada = (sumYY - (2 * this.result.a * sumY) - (2 * this.result.b * sumXY) +
    (n * (this.result.a * this.result.a)) + (2 * this.result.a * this.result.b * sumX) + ((this.result.b * this.result.b) * sumXX));
    this.result.sigmaCuadrada = this.result.discrepanciaCuadrada / (n - 2);
    this.result.errorA = Math.sqrt((this.result.sigmaCuadrada * sumXX) / this.result.delta);
    this.result.errorB = Math.sqrt((this.result.sigmaCuadrada * n) / this.result.delta);
    this.result.coeficienteCorrelacion = (((n * sumXY) - (sumX * sumY)) / Math.sqrt(((n * sumXX) - (sumX * sumX)) *
    ((n * sumYY) - (sumY * sumY))));
    this.result.lowerA = Math.pow(10, this.result.a);
    this.result.lowerB = this.result.b;
    this.result.errorLowerA = Math.pow(10, this.result.a) * Math.LN10 * this.result.errorA;
    this.result.errorLowerB = this.result.errorB;
  }

}
