import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SplitterComponent } from "../../components/splitter/splitter.component";

@Component({
    selector: 'app-info',
    standalone: true,
    templateUrl: './info.component.html',
    styleUrl: './info.component.css',
    imports: [HeaderComponent, SplitterComponent]
})
export class InfoComponent {

}
