import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/dashboard',
      },
      {
        label: 'Exchanges',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: '/exchanges',
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-flag',
        routerLink: '/about',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-send',
        routerLink: '/contact',
      },
    ];
  }
}
