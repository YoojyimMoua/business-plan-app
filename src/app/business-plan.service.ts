import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { BusinesssPlan } from '../models/businessPlan';

@Injectable({
  providedIn: 'root'
})
export class BusinessPlanService {

  private apiUrl = `${environment.apiUrl}/businessplan`

  constructor(private http: HttpClient) { }

  getBusinessPlan(): Observable<BusinesssPlan[]> {
    return this.http.get<BusinesssPlan[]>(this.apiUrl);
  }

  getBusinessPlanById(planId : number): Observable<BusinesssPlan> {
    return this.http.get<BusinesssPlan>(`${this.apiUrl}/${planId}`);
  }

  createBusinessPlan(businessPlan: BusinesssPlan): Observable<BusinesssPlan> {
    return this.http.post<BusinesssPlan>(this.apiUrl, businessPlan);
  }

  deleteBusinessPlan(planId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${planId}`);
  }

  editBusinessPlan(businessPlan: BusinesssPlan): Observable<BusinesssPlan> {
    return this.http.put<BusinesssPlan>(`${this.apiUrl}/${businessPlan.planId}`, businessPlan);
  }
}
