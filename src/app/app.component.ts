import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BusinessPlanTableComponent } from './business-plan-table/business-plan-table.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BusinessPlanTableComponent, RouterModule, FormsModule, CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'business-plan-app';

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
