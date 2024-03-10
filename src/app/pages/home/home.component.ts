import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InsertComponent } from "../insert/insert.component";
import { fadeInAnimation } from '../../animations/fade';
import { BehaviorSubject } from 'rxjs';
import { HeroComponent } from "../../components/hero/hero.component";
import { RippleDirective } from '../../directives/ripple.directive';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    animations: [fadeInAnimation],
    imports: [RouterLink, RouterLinkActive, CommonModule, InsertComponent, HeroComponent]
})
export class HomeComponent {
  public onAfterTitleEnter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  onTitleFadeIn() {
    this.onAfterTitleEnter.next(true);
  }
}
