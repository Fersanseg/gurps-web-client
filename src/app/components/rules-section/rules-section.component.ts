import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rules-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rules-section.component.html',
  styleUrl: './rules-section.component.css'
})
export class RulesSectionComponent {
  @Input() public sectionTitle!: string;
  @Input() public pageRef?: string;
}
