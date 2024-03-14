import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-splitter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splitter.component.html',
  styleUrl: './splitter.component.css'
})
export class SplitterComponent {
  @Input() public flipped = false;
  @Input() public hovered = false;
}
