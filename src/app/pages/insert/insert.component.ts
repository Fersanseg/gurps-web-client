import { Component } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {

  constructor(private serverService: ServerService) { }

  onSubmit() {
    this.serverService.createTrait().subscribe(r => console.log("INSERT RESPONSE: ", r));
  }
}
