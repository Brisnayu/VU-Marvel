import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsComponent } from './comics.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { CustomButtonComponent } from '../../../../shared/components/custom-button/custom-button.component';

describe('ComicsComponent', () => {
  let component: ComicsComponent;
  let fixture: ComponentFixture<ComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsComponent, CustomButtonComponent],
      imports: [HttpClientTestingModule,
        RouterModule.forRoot(
          [{ path: '', component: ComicsComponent }]
        )
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(ComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Comics list');
  });
});
