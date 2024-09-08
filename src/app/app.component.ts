import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routeFadeInOutAnimation } from './animations/route-transition';
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [routeFadeInOutAnimation]
})
export class AppComponent {
  get showHeader(): boolean { 
    console.log(this._router.url)
    return this._router.url != "/";
  }

  constructor(
    private contexts: ChildrenOutletContexts,
    private _router: Router
  ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
