import { Component, OnInit } from '@angular/core';
import { BusinesssPlan } from '../../models/businessPlan';
import { BusinessPlanService } from '../business-plan.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'business-plan-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-plan-table.component.html',
  styleUrl: './business-plan-table.component.css'
})
export class BusinessPlanTableComponent {

  businessPlans: BusinesssPlan[] = [];

  constructor(private businessPlanService: BusinessPlanService, private router: Router){}

  ngOnInit(){
    this.businessPlanService.getBusinessPlan().subscribe((data: BusinesssPlan[]) => {
      this.businessPlans = data;
      console.log(data);
    })
  }

  deleteBusinessPlan(planId: number) : void {
    this.businessPlanService.deleteBusinessPlan(planId).subscribe({
      next: (response) => {
        this.businessPlans = this.businessPlans.filter(plan => plan.planId !== planId);
      },
      error: (err) => {
        console.error('Error deleting business plan:', err);
      }
    });
  }

  editBusinessPlan(planId: number) : void {
    this.router.navigate(['/edit', planId]);
  }

}
