import { Component } from '@angular/core';
import { POSTS } from '../data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
// post.component.ts
// post.component.ts
export class PostComponent {
  posts = POSTS;
  selectedPost: any;

  onSubmit() {
    console.log('Post updated:', this.selectedPost);
    this.selectedPost = null;
  }

  onSelect(post: any) {
    this.selectedPost = post;
  }
}
