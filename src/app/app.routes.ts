import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingMainComponent } from './index/landing-main.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'index', component: LandingMainComponent }, 
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}