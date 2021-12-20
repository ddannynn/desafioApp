import { Routes } from '@angular/router';
import { CambioComponent } from './components/cambio/cambio.component';
import { TipoCambioComponent } from './components/tipo-cambio/tipo-cambio.component';

export const ROUTES: Routes = [
  { path: 'inicio', component: CambioComponent },
  { path: 'tipocambio', component: TipoCambioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];
