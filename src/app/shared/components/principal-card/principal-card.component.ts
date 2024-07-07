import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-principal-card',
  templateUrl: './principal-card.component.html',
  styleUrl: './principal-card.component.scss'
})
export class PrincipalCardComponent {
  @Input() imageCard: string = '';
  @Input() titlePrincipal: string = '';
  @Input() firstInformation: string | number = '';
  @Input() secondInformation?: string | number = '';
  @Input() dateInformation: string = '';
  @Input() viewButton: boolean = true;
  @Input() textButton: string = '';

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>()

  onButtonClick() {
    this.buttonClicked.emit();
  }
}
