import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { expandAnimationNoFade } from '../../animations/expand-height';
import { rotateAnimation } from '../../animations/rotate';

@Component({
  selector: 'app-rules-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rules-section.component.html',
  styleUrl: './rules-section.component.css',
  animations: [expandAnimationNoFade, rotateAnimation]
})
export class RulesSectionComponent {
  @Input() public sectionTitle!: string;
  @Input() public pageRef?: string;
  @Input() public stylesOverrides: string = "";

  public isShown: boolean = false;

  toggleSection() {
    this.isShown = !this.isShown;
  }
}
