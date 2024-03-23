import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SplitterComponent } from "../../components/splitter/splitter.component";
import { RulesSectionComponent } from "../../components/rules-section/rules-section.component";
import { BooksReferencePopupComponent } from "../../components/books-reference-popup/books-reference-popup.component";
import { stopPropagation } from '../../utils/utils-functions';

@Component({
    selector: 'app-rules',
    standalone: true,
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.css',
    imports: [HeaderComponent, SplitterComponent, RulesSectionComponent, BooksReferencePopupComponent]
})
export class RulesComponent {
  public stopPropagation: (e: Event) => void = stopPropagation;

}
