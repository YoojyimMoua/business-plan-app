import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7261/api/User';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, {
      email,
      password,
    }).pipe(
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError(() => new Error('Login failed. Please try again.'));
      }),
      tap((response) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  register(username: string, email: string, password: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, {
      username,
      email,
      password,
    }).pipe(
      catchError((error) => {
        console.error('Registration failed:', error);
        return throwError(() => new Error('Registration failed. Please try again.'));
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
