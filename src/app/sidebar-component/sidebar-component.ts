import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { SUB_MENU_NAMES } from '../menu-data';

@Component({
  host: { '[class.is-open]': 'isOpen' },
  imports: [RouterLink],
  selector: 'app-sidebar-component',
  styleUrl: './sidebar-component.css',
  templateUrl: './sidebar-component.html',
})
export class SidebarComponent {
	isOpen = false;
	readonly subMenuNames = SUB_MENU_NAMES;

	private readonly router = inject(Router);
	private readonly url = toSignal(
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map(() => this.router.parseUrl(this.router.url)),
		),
		{ initialValue: this.router.parseUrl(this.router.url) },
	);

	// Mirrors the menu component: an unknown or missing section falls back to the first sub menu
	readonly selected = computed(() => {
		const tree = this.url();
		const segments = tree.root.children['primary']?.segments ?? [];
		if (segments.length !== 1 || segments[0].path !== 'menu') {
			return null;
		}
		const section = tree.queryParams['section'];
		return SUB_MENU_NAMES.includes(section) ? section : SUB_MENU_NAMES[0];
	});

	toggleMenu(): void {
		this.isOpen = !this.isOpen;
	}

	closeMenu(): void {
		this.isOpen = false;
	}
}
