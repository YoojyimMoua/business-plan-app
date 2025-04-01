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


}
