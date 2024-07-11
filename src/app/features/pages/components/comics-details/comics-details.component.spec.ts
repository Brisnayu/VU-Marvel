import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsDetailsComponent } from './comics-details.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { of } from 'rxjs';

describe('ComicsDetailsComponent', () => {
  let component: ComicsDetailsComponent;
  let fixture: ComponentFixture<ComicsDetailsComponent>;
  let mockActivatedRoute;

  beforeEach(async () => {
    mockActivatedRoute = {
      url: of([{ path: '1' }])
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule],
      declarations: [ComicsDetailsComponent, CustomButtonComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }]

    }).compileComponents();

    fixture = TestBed.createComponent(ComicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Detail comic');
  });

});
