import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the persistent sidebar menu', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const sidebar = compiled.querySelector('aside[aria-label="Site information and menu"]');

    expect(sidebar).toBeTruthy();
    expect(sidebar?.querySelector('.sidebar-title')?.textContent).toBe('Menu');
    expect(
      Array.from(sidebar?.querySelectorAll('.menu-items li') ?? []).map((item) =>
        item.textContent?.trim(),
      ),
    ).toEqual([
      'Appetizer',
      'Noodles',
      'Steamed Bao Bun',
      'Ramen',
      'Fried Rice',
      'Drinks',
      'Combos',
    ]);
    expect(sidebar?.textContent).toContain('About');
    expect(sidebar?.textContent).toContain('Reviews');
  });
});
