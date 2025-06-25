import { Routes } from '@angular/router';
import { LandingMainComponent } from './index/landing-main.component';

export const routes: Routes = [
  { path: 'index', component: LandingMainComponent }, 
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];
