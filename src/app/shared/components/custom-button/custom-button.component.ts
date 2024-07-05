import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() textButton: string = '';
  @Input() buttonClass: string = '';
  @Input() disabled!: boolean;
}
