import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('MARVEL');
  });

  it('should display the Marvel icon', () => {
    const img = document.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.alt).toContain('icon-marvel');
  });

  it('should render button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button'))
  })

});
