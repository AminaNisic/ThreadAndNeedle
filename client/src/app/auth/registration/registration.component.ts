import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData: any = {
    username: '',
    password: '',
    email: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  register() {
    // Send a POST request to the server with the user data
    this.http.post('http://localhost:3001/auth/register', this.userData).subscribe(
      (response: any) => {
        // Registration successful, handle the response
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      (error) => {
        // Registration failed, handle the error
        console.error('Registration failed', error);
      }
    );
  }
}
