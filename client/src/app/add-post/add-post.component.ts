import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  title: string = '';
  blogText: string = '';
  description: string = '';
  titleColor: string = '';
  blogTextColor: string = '';
  descriptionColor: string = '';

  constructor(private http: HttpClient) { }

  changeTextColor(fieldName: string) {
    switch (fieldName) {
      case 'title':
        this.titleColor = 'darkGreen';
        break;
      case 'shortText':
        this.blogTextColor = 'green';
        break;
      case 'post':
        this.descriptionColor = 'green';
        break;
    }
  }

  submitForm() {
    // Retrieve the access token from localStorage
    const accessToken = localStorage.getItem('accessToken');
  
    // Check if the user is logged in
    if (!accessToken) {
      console.error('User not logged in');
      // Handle the error or redirect to the login page
      return;
    }
  
    // Set the request headers with the access token
    const headers = new HttpHeaders().set('Authorization', accessToken);

    // Prepare the post data
    const postData = {
      title: this.title,
      blogText: this.blogText,
      description: this.description
    };

    // Perform API call to create post endpoint
    this.http.post('http://localhost:3001/posts/createPost', postData, { headers }).subscribe(
      (response) => {
        // Post creation successful
        console.log('Post added successfully:', response);

        // Reset form fields
        this.title = '';
        this.blogText = '';
        this.description = '';

        // Perform additional actions if needed
      },
      (error) => {
        // Post creation failed
        console.error('Error adding post:', error);
        // Handle the error
      }
    );
  }
}