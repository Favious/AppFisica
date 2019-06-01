export interface LinealRegressionResults {
    a: number;
    b: number;
    delta: number;
    errorA: number;
    errorB: number;
    sigmaCuadrada: number;
    discrepanciaCuadrada: number;
    coeficienteCorrelacion: number;
}
export interface Interval {
    x: number;
    y: number;
}

export interface ExponencialRegressionResults {
    a: number;
    b: number;
    lowerA: number;
    lowerB: number;
    delta: number;
    errorA: number;
    errorB: number;
    errorLowerA: number;
    errorLowerB: number;
    sigmaCuadrada: number;
    discrepanciaCuadrada: number;
    coeficienteCorrelacion: number;
}