import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExponencialRegressionPage } from './exponencial-regression.page';

const routes: Routes = [
  {
    path: '',
    component: ExponencialRegressionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExponencialRegressionPage]
})
export class ExponencialRegressionPageModule {}
