import { Component, Input } from '@angular/core';
import { RippleDirective } from '../../directives/ripple.directive';

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
}
