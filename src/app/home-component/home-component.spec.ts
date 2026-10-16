import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home-component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the address and phone number between the image and hours', () => {
    const content = fixture.nativeElement as HTMLElement;
    const image = content.querySelector('.home-image-frame');
    const contact = content.querySelector('.contact-block');
    const hours = content.querySelector('.hours-block');

    expect(contact?.textContent).toContain('175 Columbia Turnpike, Rensselaer, NY 12144');
    expect(contact?.textContent).toContain('(518) 818-0168');
    expect(image?.nextElementSibling).toBe(contact);
    expect(contact?.nextElementSibling).toBe(hours);
  });
});
