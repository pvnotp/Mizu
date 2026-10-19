import { Component, DestroyRef, ElementRef, afterRenderEffect, computed, inject, input, output } from '@angular/core';
import { MENU_ITEMS, MenuItemOption } from '../menu-data';

@Component({
  selector: 'app-sub-menu-component',
  styleUrl: './sub-menu-component.scss',
  templateUrl: './sub-menu-component.html',
  host: { '(scroll)': 'updateMoreBelow()' },
})
export class SubMenuComponent {
  name = input.required<string>();
  items = computed(() => MENU_ITEMS[this.name()] ?? []);
  /** Emits true while items are hidden below the visible area. */
  moreBelow = output<boolean>();

  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private last: boolean | null = null;

  constructor() {
    afterRenderEffect(() => {
      this.items();
      this.el.scrollTop = 0;
      this.updateMoreBelow();
    });
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => this.updateMoreBelow());
      observer.observe(this.el);
      inject(DestroyRef).onDestroy(() => observer.disconnect());
    }
  }

  updateMoreBelow(): void {
    const more = this.el.scrollHeight - this.el.scrollTop - this.el.clientHeight > 1;
    if (more !== this.last) {
      this.last = more;
      this.moreBelow.emit(more);
    }
  }

  hasPrices(option: MenuItemOption): boolean {
    return option.items.some((item) => !!item.price);
  }

  names(option: MenuItemOption): string {
    return option.items.map((item) => item.name).join(', ');
  }
}
