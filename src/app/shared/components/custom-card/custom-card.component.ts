import { Component, inject, Input } from '@angular/core';
import { Series, SeriesComics } from '../../../core/models/series.model';
import { Router } from '@angular/router';

type MarvelItem = Series | SeriesComics;

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss'
})
export class CustomCardComponent {
  private router = inject(Router);
  @Input() listMarvel: MarvelItem[] = [];
  @Input() page: string = '';

  goToDetails(id: number) {
    if (this.page === 'series') {
      this.router.navigate([`/series/${id}/comics`])
    }
  }
}
