import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCardComponent } from './principal-card.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

describe('PrincipalCardComponent', () => {
  let component: PrincipalCardComponent;
  let fixture: ComponentFixture<PrincipalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalCardComponent, CustomButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
