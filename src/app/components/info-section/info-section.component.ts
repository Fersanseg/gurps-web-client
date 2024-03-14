import { Component } from '@angular/core';
import { SplitterComponent } from "../splitter/splitter.component";

@Component({
    selector: 'app-info-section',
    standalone: true,
    templateUrl: './info-section.component.html',
    styleUrl: './info-section.component.css',
    imports: [SplitterComponent]
})
export class InfoSectionComponent {
  public hovered = false;

  onMouseEnter() {
    this.hovered = true;
  }
  onMouseLeave() {
    this.hovered = false;
  }

}
