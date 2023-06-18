import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  title: string = '';
  shortText: string = '';
  post: string = '';
  titleColor: string = '';
  shortTextColor: string = '';
  postColor: string = '';

  changeTextColor(fieldName: string) {
    switch (fieldName) {
      case 'title':
        this.titleColor = 'darkGreen';
        break;
      case 'shortText':
        this.shortTextColor = 'green';
        break;
      case 'post':
        this.postColor = 'green';
        break;
    }
  }

  submitForm() {
    console.log('Submitted:', this.title, this.shortText, this.post);
    // Add your logic to handle the form submission here
  }
  }
