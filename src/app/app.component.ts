import { Component, OnInit } from '@angular/core';
import { SeriesServices } from './core/services/seriesServices/series-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'examenMarvel';

  constructor(private seriesService: SeriesServices) {}

  ngOnInit(): void {
    this.seriesService.getSeries('36021745acc8b7363ef95819abbb84fd', '878b8e5979600631f660304ccecf3bf3').subscribe((series) =>
    console.log(series)
    )
  }
}
