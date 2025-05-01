import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
export class LoginComponent {
  email: string = ''; 
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      alert('Both email and password are required.');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/businessPlans']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        if (err.status === 401) {
          alert('Invalid email or password.');
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      },
    });
  }
}
