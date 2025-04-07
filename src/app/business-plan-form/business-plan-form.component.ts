import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusinesssPlan } from '../../models/businessPlan';
import { BusinessPlanService } from '../business-plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-plan-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './business-plan-form.component.html',
  styleUrl: './business-plan-form.component.css'
})
export class BusinessPlanFormComponent implements OnInit {

  businessPlan: BusinesssPlan = {
    planId: 0,
    planName: '',
    planDescription: ''
  }

  isEditing: boolean = false;

  errorMessage: string = '';

  constructor(private businessPlanService: BusinessPlanService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      const planId = result.get('planId');

      if (planId) {
        this.isEditing = true;

        this.businessPlanService.getBusinessPlanById(Number(planId)).subscribe({
          next: (result) => this.businessPlan = result,
          error: (err) => console.error("Error loading employee", err)
        });
      }
      })
    }
  

  onSubmit(): void {
    
    if(this.isEditing) {

      this.businessPlanService.editBusinessPlan(this.businessPlan)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
          error: (err) => {
            console.error(err);
            this.errorMessage = `Error occurred during update: ${err.status}`;
          }
        });

    } else {
      this.businessPlanService.createBusinessPlan(this.businessPlan)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
          error: (err) => {
            console.error(err);
            this.errorMessage = `Error occurred during creation: ${err.status}`;
          }
        });
    }

    }
}
