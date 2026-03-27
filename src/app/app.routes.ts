import { Routes } from '@angular/router';
import { PortfolioHome } from './portfolio-home/portfolio-home';

export const routes: Routes = [
{ path: 'home', component: PortfolioHome },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'about', loadComponent: () => import('./portfolio-about/portfolio-about').then(m => m.PortfolioAbout)},
  {path: 'projects', loadComponent: () => import('./portfolio-project/portfolio-project').then(m => m.PortfolioProject)},
  {path: 'contact', loadComponent: () => import('./portfolio-contact-us/portfolio-contact-us').then(m => m.PortfolioContactUs)},
];
