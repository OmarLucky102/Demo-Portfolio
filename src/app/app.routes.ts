import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portofolio } from './portofolio/portofolio';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';

export const routes: Routes = [
  //path is a relative url point component
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'portfolio', component: Portofolio },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'home' },
];
