import { Component, Input } from '@angular/core';
import { RippleDirective } from '../../directives/ripple.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RippleDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() public imgSrc: string = "";
  @Input() public title: string = "";
  @Input() public text: string = "";
  @Input() public route: string = "";

  constructor(private router: Router) {}

  routeTo() {
    this.router.navigate([this.route]);
  }
}
