import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public dataForm!: FormGroup;

  constructor(private infoApiMarvel: FormBuilder) { }

  ngOnInit(): void {
    this.dataForm = this.infoApiMarvel.group({
      private_key: ['', Validators.required],
      public_key: ['', Validators.required]
    })
  }

  onSubmit() {
    const formData = this.dataForm.value;
    console.log('INFO: ', formData)
  }
}
