import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, data: {animation: 'homeComponent'}},
    {path: 'login', component: LoginComponent, data: {animation: 'loginComponent'}},
    {path: 'info', component: InfoComponent, data: {animation: 'infoComponent'}}
];
