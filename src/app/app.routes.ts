import { Routes } from '@angular/router';
import { BusinessPlanTableComponent } from './business-plan-table/business-plan-table.component';
import { BusinessPlanFormComponent } from './business-plan-form/business-plan-form.component';
import { SamplePlansComponent } from './sample-plans/sample-plans.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'create', component: BusinessPlanFormComponent},
    {path: 'edit/:planId', component: BusinessPlanFormComponent},
    {path: 'businessPlans', component: BusinessPlanTableComponent},
    {path: 'samplePlans', component: SamplePlansComponent},
];
