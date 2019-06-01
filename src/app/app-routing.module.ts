import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lineal-regression',
    pathMatch: 'full'
  },
  { path: 'lineal-regression',
    loadChildren: './pages/lineal-regression/lineal-regression.module#LinealRegressionPageModule'
  },
  { path: 'exponencial-regression',
    loadChildren: './pages/exponencial-regression/exponencial-regression.module#ExponencialRegressionPageModule'
  },
  { path: 'potencial-regression',
    loadChildren: './pages/potencial-regression/potencial-regression.module#PotencialRegressionPageModule'
  },
  { path: 'credits', loadChildren: './pages/credits/credits.module#CreditsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
