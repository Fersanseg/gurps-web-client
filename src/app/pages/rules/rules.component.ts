import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-rules',
    standalone: true,
    templateUrl: './rules.component.html',
    styleUrl: './rules.component.css',
    imports: [HeaderComponent]
})
export class RulesComponent {

}
