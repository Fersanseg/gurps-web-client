import { Component } from '@angular/core';
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
  public expanded = false;
  public hovered = false;
  
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  onMouseEnter() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }

}
