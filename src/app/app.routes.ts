import { Routes } from '@angular/router';
import { BusinessPlanTableComponent } from './business-plan-table/business-plan-table.component';
import { BusinessPlanFormComponent } from './business-plan-form/business-plan-form.component';

export const routes: Routes = [
    {path: '', component: BusinessPlanTableComponent},
    {path: 'create', component: BusinessPlanFormComponent},
    {path: 'businessPlans', redirectTo: '', pathMatch:'full'}
];
