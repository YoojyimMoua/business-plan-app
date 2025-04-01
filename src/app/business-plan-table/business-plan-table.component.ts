import { Component, OnInit } from '@angular/core';
import { BusinesssPlan } from '../../models/businessPlan';
import { BusinessPlanService } from '../business-plan.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'business-plan-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-plan-table.component.html',
  styleUrl: './business-plan-table.component.css'
})
export class BusinessPlanTableComponent {

  businessPlans: BusinesssPlan[] = [];

  constructor(private businessPlanService: BusinessPlanService){}

  ngOnInit(){
    this.businessPlanService.getBusinessPlan().subscribe((data: BusinesssPlan[]) => {
      this.businessPlans = data;
      console.log(data);
    })
  }

}
