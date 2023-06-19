import { Component } from '@angular/core';

//import axios from 'axios';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
//register function 
userData: any = {
    username: '',
    password: '',
    email: ''
};

registerUser(userData: any): void {
  /*axios.post('http://localhost:3001/auth', userData)
    .then((response) => {
      console.log('Inserted.');
      // Handle the response as needed
    })
    .catch((error) => {
      console.error(error);
      // Handle the error as needed
    });*/
}
 

}
