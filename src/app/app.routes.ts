import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { RulesComponent } from './pages/rules/rules.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'homeComponent'}},
  {path: 'login', component: LoginComponent, data: {animation: 'loginComponent'}},
  {path: 'info', component: InfoComponent, data: {animation: 'infoComponent'}},
  {path: 'rules', component: RulesComponent, data: {animation: 'rulesComponent'}},
  {path: '**', component: HomeComponent, data: {animation: 'homeComponent'}}
];
