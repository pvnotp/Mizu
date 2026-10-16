import { Component } from '@angular/core';

@Component({
  host: { '[class.is-open]': 'isOpen' },
  selector: 'app-sidebar-component',
  styleUrl: './sidebar-component.css',
  templateUrl: './sidebar-component.html',
})
export class SidebarComponent {
	isOpen = false;

	toggleMenu(): void {
		this.isOpen = !this.isOpen;
	}
}
