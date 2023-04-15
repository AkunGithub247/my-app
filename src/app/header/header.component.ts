import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  pageTitle: string;

  constructor(private router: Router) {
    this.pageTitle = 'Home';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.pageTitle = 'Home';
            break;
          case '/about':
            this.pageTitle = 'About';
            break;
          case '/contact':
            this.pageTitle = 'Contact';
            break;
            case '/post':
              this.pageTitle = 'Post';
              break;
            case '/profile':
              this.pageTitle = 'Profile';
              break;
            case '/settings':
              this.pageTitle = 'Settings';
              break;
            default:
              this.pageTitle = 'Home';
        }
      }
    });
  }
}
