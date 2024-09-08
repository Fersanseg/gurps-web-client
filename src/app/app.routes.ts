import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/game/game.component';
import { CampaignComponent } from './pages/campaign/campaign.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'homeComponent'}},
  {path: 'campaign', component: CampaignComponent, data: {animation: 'loginComponent'}},
  {path: 'login', component: LoginComponent, data: {animation: 'loginComponent'}},
  {path: 'game', component: InfoComponent, data: {animation: 'infoComponent'}},
  {path: '**', component: HomeComponent, data: {animation: 'homeComponent'}}
];
