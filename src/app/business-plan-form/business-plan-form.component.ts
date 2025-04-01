import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusinesssPlan } from '../../models/businessPlan';

@Component({
  selector: 'app-business-plan-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './business-plan-form.component.html',
  styleUrl: './business-plan-form.component.css'
})
export class BusinessPlanFormComponent {

  businessPlan: BusinesssPlan = {
    planId: 0,
    planName: '',
    planDescription: ''
  }

  onSubmit(): void {
    console.log(this.businessPlan);
  }

}
