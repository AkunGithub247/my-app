import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Home',
      routerLink: '/',
    },
    {
      label: 'Profile',
      routerLink: '/profile',
    },
    {
      label: 'Post',
      routerLink: '/post',
    },
    {
      label: 'Setting',
      routerLink: '/settings',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
