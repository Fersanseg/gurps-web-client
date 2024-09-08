import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { InfoSectionComponent } from "../../components/info-section/info-section.component";
import { stopPropagation } from '../../utils/utils-functions';
import { RulesSectionComponent } from "../../components/rules-section/rules-section.component";
import { BooksReferencePopupComponent } from "../../components/books-reference-popup/books-reference-popup.component";

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.css',
    imports: [HeaderComponent, InfoSectionComponent, RulesSectionComponent, BooksReferencePopupComponent]
})
export class InfoComponent {
  public stopPropagation: (e: Event) => void = stopPropagation;
}
