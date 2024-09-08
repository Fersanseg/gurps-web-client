import { Component } from '@angular/core';
import { RulesSectionComponent } from "../../components/rules-section/rules-section.component";
import { BooksReferencePopupComponent } from "../../components/books-reference-popup/books-reference-popup.component";
import { SplitterComponent } from "../../components/splitter/splitter.component";
import { stopPropagation } from '../../utils/utils-functions';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [RulesSectionComponent, BooksReferencePopupComponent, SplitterComponent, HeaderComponent],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.css'
})
export class CampaignComponent {
  public stopPropagation: (e: Event) => void = stopPropagation;
}
