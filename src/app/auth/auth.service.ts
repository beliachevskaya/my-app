import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user: any;
  private errorMessage: string;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  login(name: string, password: string): void {
    this.http.get('localhost:3000/api/login').subscribe(
      data => this.user = data,
      error => {
        this.errorMessage = error.message;
        this.snackBar.open(this.errorMessage, 'OK', {
          duration: 10000,
          panelClass: 'error',
          horizontalPosition: 'right'
        });
      }
    );
  }

  signUp(user: any): void {
    this.http.post('localhost:3000/api/registration', user)
    .subscribe(
      data => this.user = data,
      error => {
        this.errorMessage = error.message;
        this.snackBar.open(this.errorMessage, 'OK', {
          duration: 10000,
          panelClass: 'error',
          horizontalPosition: 'right'
        });
      }
    );
  }
}
