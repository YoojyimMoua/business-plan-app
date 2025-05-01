import { Routes } from '@angular/router';
import { BusinessPlanTableComponent } from './business-plan-table/business-plan-table.component';
import { BusinessPlanFormComponent } from './business-plan-form/business-plan-form.component';
import { SamplePlansComponent } from './sample-plans/sample-plans.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'create', component: BusinessPlanFormComponent},
    {path: 'edit/:planId', component: BusinessPlanFormComponent},
    {path: 'businessPlans', component: BusinessPlanTableComponent, canActivate: [AuthGuard]},
    {path: 'samplePlans', component: SamplePlansComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}, 
];
