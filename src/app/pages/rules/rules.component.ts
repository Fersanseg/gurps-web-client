import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SplitterComponent } from "../../components/splitter/splitter.component";
import { RulesSectionComponent } from "../../components/rules-section/rules-section.component";

@Component({
    selector: 'app-rules',
    standalone: true,
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.css',
    imports: [HeaderComponent, SplitterComponent, RulesSectionComponent]
})
export class RulesComponent {

}
