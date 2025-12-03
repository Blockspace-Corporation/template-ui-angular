import { Routes } from '@angular/router';
import { Application } from "./application"

export const routes: Routes = [{
  path: "",
  component: Application,
  children: [
    { path: '', redirectTo: '/application/home', pathMatch: 'full' },
    {
      path: "home",
      loadComponent: () => import('./home/home').then(m => m.Home)
    },
  ]
}];
