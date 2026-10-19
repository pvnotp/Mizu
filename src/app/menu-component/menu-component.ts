import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SUB_MENU_GROUPS, SUB_MENU_NAMES } from '../menu-data';
import { SubMenuComponent } from '../sub-menu-component/sub-menu-component';

@Component({
  imports: [RouterLink, SubMenuComponent],
  selector: 'app-menu-component',
  styleUrl: './menu-component.scss',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  readonly tabRows = SUB_MENU_GROUPS;
  private readonly queryParams = toSignal(inject(ActivatedRoute).queryParamMap);

  moreBelow = signal(false);

  selected = computed(() => {
    const section = this.queryParams()?.get('section') ?? '';
    return SUB_MENU_NAMES.includes(section) ? section : SUB_MENU_NAMES[0];
  });
}
