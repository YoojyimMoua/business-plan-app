import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BusinessPlanTableComponent } from './business-plan-table/business-plan-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BusinessPlanTableComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'business-plan-app';
}
