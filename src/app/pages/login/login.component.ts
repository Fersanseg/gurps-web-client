import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InsertComponent } from "../insert/insert.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule, InsertComponent]
})
export class LoginComponent {
  constructor(private _authService: AuthService) {}

  onSubmit(form: NgForm) {
    this._authService.login(form.value.email, form.value.password).subscribe(r => { if (r) console.log("Logged in") });
  }
}
