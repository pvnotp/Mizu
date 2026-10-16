import { Component } from '@angular/core';
import { HomeComponent } from './home-component/home-component';
import { SidebarComponent } from './sidebar-component/sidebar-component';

@Component({
  imports: [HomeComponent, SidebarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
