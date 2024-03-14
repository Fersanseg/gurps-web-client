import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { InfoSectionComponent } from "../../components/info-section/info-section.component";

@Component({
    selector: 'app-info',
    standalone: true,
    templateUrl: './info.component.html',
    styleUrl: './info.component.css',
    imports: [HeaderComponent, InfoSectionComponent]
})
export class InfoComponent {

}
