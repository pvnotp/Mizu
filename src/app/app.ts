import { Component } from '@angular/core';
import { HomeComponent } from './home-component/home-component';

@Component({
  imports: [HomeComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
