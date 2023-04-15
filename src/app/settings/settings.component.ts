import { Component, Input } from '@angular/core';
import { POSTS } from '../data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
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
