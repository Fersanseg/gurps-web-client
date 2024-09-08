import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InsertComponent } from "../insert/insert.component";
import { fadeInAnimation } from '../../animations/fade';
import { BehaviorSubject } from 'rxjs';
import { HeroComponent } from "../../components/hero/hero.component";
import { RulesSectionComponent } from "../../components/rules-section/rules-section.component";
import { InfoSectionComponent } from "../../components/info-section/info-section.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    animations: [fadeInAnimation],
    imports: [RouterLink, RouterLinkActive, CommonModule, InsertComponent, HeroComponent, RulesSectionComponent, InfoSectionComponent]
})
export class HomeComponent {
  public onAfterTitleEnter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  onTitleFadeIn() {
    this.onAfterTitleEnter.next(true);
  }
}
