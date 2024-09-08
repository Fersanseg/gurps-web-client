import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { HeaderButtonData } from '../../types/header-button-data';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, ButtonComponent]
})
export class HeaderComponent implements OnInit {
  public buttons: HeaderButtonData[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
  }
}
