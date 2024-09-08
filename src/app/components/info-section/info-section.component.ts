import { Component, Input } from '@angular/core';
import { SplitterComponent } from "../splitter/splitter.component";
import { expandAnimation } from '../../animations/expand-height';

@Component({
    selector: 'app-info-section',
    standalone: true,
    templateUrl: './info-section.component.html',
    styleUrl: './info-section.component.css',
    imports: [SplitterComponent],
    animations: [expandAnimation]
})
export class InfoSectionComponent {
  @Input() public preventEvents = false;
  @Input() public expanded = false;
  public hovered = false;
  
  toggleExpanded() {
    if (!this.preventEvents)
      this.expanded = !this.expanded;
  }

  onMouseEnter() {
    if (!this.preventEvents)
      this.hovered = true;
  }

  onMouseLeave() {
    if (!this.preventEvents)
      this.hovered = false;
  }

}
