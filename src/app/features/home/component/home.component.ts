import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../core/services/localStorage/local-storage.service';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private infoApiMarvel = inject(FormBuilder);
  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);
  private ts: number = 1;

  public dataForm!: FormGroup;

  ngOnInit(): void {
    this.dataForm = this.infoApiMarvel.group({
      private_key: ['', Validators.required],
      public_key: ['', Validators.required]
    })
  }

  onSubmit() {
    const formData = this.dataForm.value;
    console.log('INFO: ', formData);
    const hash = Md5.hashStr(this.ts + formData.private_key + formData.public_key);
    this.localStorageService.setItem('hash', hash);
    this.localStorageService.setItem('public_key', formData.public_key);
    alert("Guardando datos!")

    this.router.navigate(['series'])
  }
}
