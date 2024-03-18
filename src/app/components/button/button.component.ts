import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() public text: string = "";
  @Input() public hasBorder: boolean = false;
  @Input() public callback = () => {};

  onClick() {
    this.callback();
  }
}
