import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PotencialRegressionPage } from './potencial-regression.page';

const routes: Routes = [
  {
    path: '',
    component: PotencialRegressionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PotencialRegressionPage]
})
export class PotencialRegressionPageModule {}
