import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideImageComponent } from './side-image-component/side-image-component';
import { SidebarComponent } from './sidebar-component/sidebar-component';

@Component({
  imports: [RouterOutlet, SideImageComponent, SidebarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
