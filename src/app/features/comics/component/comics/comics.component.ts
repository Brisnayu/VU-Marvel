import { Component, inject } from '@angular/core';
import { SeriesServices } from '../../../../core/services/seriesServices/series-services.service';
import { Series, SeriesComics } from '../../../../core/models/series/series.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LocalStorageService } from '../../../../core/services/localStorage/local-storage.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.scss'
})
export class ComicsComponent {

  private seriesService = inject(SeriesServices);
  private seriesId!: number;
  listComics: SeriesComics[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.seriesId = Number(params.get('id'));
      console.log(this.seriesId); 
    });

    console.log(this.seriesId)

    this.seriesService.getComicsOfSeries(this.seriesId).subscribe((data) => this.listComics = data)
      
  }
}
