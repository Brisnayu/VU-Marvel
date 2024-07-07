import { Component, inject } from '@angular/core';
import { SeriesServices } from '../../../../core/services/seriesServices/series-services.service';
import { Series } from '../../../../core/models/series/series.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent {
  private seriesService = inject(SeriesServices);
  listSeries: Series[] = [];

  ngOnInit(): void {

    this.seriesService.getSeries().subscribe(
      (series) => {
        this.listSeries = series;
        console.log(this.listSeries);
      },
      (error) => {
        console.error('Error al obtener las series:', error);
      }
    );
  }
}
