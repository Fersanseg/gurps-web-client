import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { HeaderButtonData } from '../../types/header-button-data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, ButtonComponent]
})
export class HeaderComponent implements OnInit {
  public buttons: HeaderButtonData[] = [];

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.buttons.push({
        text: "SAMPLE",
        hasBorder: i % 2 !== 0,
        callback: () => {console.log(`CLICKED BUTTON ${i}`)}
      });
    }
  }
}
