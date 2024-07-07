import { Component, inject, Input } from '@angular/core';
import { Series } from '../../../core/models/series/series.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss'
})
export class CustomCardComponent {
  private router = inject(Router);
  @Input() listMarvel: Series[] = [];
  @Input() page: string = '';

  goToDetails(id: number) {
    if (this.page === 'series') {
      this.router.navigate([`/series/${id}/comics`])
    } else {
      this.router.navigate([`home`])
    }

  }
}
