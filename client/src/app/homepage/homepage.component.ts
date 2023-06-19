import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  blogPosts: number[] = [1, 2, 3, 4]; // Initial blog posts

  showMoreBlogPosts() {
    for (let i = 0; i < 4; i++) {
      this.blogPosts.push(i + 5); // Add new blog post
    }
  }
}
