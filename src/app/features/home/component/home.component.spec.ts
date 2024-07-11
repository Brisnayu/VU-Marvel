import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomButtonComponent, HomeComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Login');
  });

  // Debe inicializar el formulario con valores vacíos
  it('should initialize the form with empty values', () => {
    expect(component.dataForm.get('private_key')?.value).toEqual('');
    expect(component.dataForm.get('public_key')?.value).toEqual('');
  });

  // Debe marcar el formulario como no válido cuando esté vacío
  it('should mark form as invalid when empty', () => {
    expect(component.dataForm.valid).toBeFalsy();
  });

  // Debe marcar el fomulario como válido cuando se completa
  it('should mark form as valid when filled out', () => {
    const private_key = component.dataForm.controls['private_key'];
    const public_key = component.dataForm.controls['public_key'];

    private_key.setValue('test private key');
    public_key.setValue('test public key');

    expect(component.dataForm.valid).toBeTruthy();
  });

  // Debe llamar al método onSubmit al enviar el formulario
  it('should call onSubmit method on form submit', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form') as HTMLElement;
    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
