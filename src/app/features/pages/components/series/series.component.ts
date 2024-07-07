import { Component, inject, OnInit } from '@angular/core';
import { SeriesServices } from '../../../../core/services/seriesServices/series-services.service';
import { Series } from '../../../../core/models/series.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent implements OnInit {
  private seriesService = inject(SeriesServices);
  private router = inject(Router);
  listSeries: Series[] = [];

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(
      (series) => {
        this.listSeries = series;
        // console.log(this.listSeries);
      },
      (error) => {
        console.error('Error al obtener las series:', error);
      }
    );
  }

  goToListComics(id: number) {

      this.router.navigate([`/series/${id}/comics`])
    
  }
}
