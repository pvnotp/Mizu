import { Component, computed, input } from '@angular/core';
import { MENU_ITEMS, MenuItemOption } from '../menu-data';

@Component({
  selector: 'app-sub-menu-component',
  styleUrl: './sub-menu-component.scss',
  templateUrl: './sub-menu-component.html',
})
export class SubMenuComponent {
  name = input.required<string>();
  items = computed(() => MENU_ITEMS[this.name()] ?? []);

  hasPrices(option: MenuItemOption): boolean {
    return option.items.some((item) => !!item.price);
  }

  names(option: MenuItemOption): string {
    return option.items.map((item) => item.name).join(', ');
  }
}
