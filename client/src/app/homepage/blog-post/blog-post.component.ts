import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  posts: any[] = [];
  isDataFetched: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (!this.isDataFetched) {
      this.isDataFetched = true;
      this.fetchPosts();
    }
  }

  fetchPosts() {
    this.http.get<any[]>('http://localhost:3001/posts').subscribe((response: any[]) => {
      this.posts = response.map(post => ({
        ...post,
        image: this.getRandomImageURL()
      }));
    });
  }

  getRandomImageURL(): string {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/500/300?random=${randomNum}`;
  }
}
