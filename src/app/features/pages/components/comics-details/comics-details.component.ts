import { Component, inject, OnInit } from '@angular/core';
import { ComicsServiceService } from '../../../../core/services/comicsServices/comics-service.service';
import { Comics } from '../../../../core/models/comics.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrl: './comics-details.component.scss'
})
export class ComicsDetailsComponent implements OnInit {
  private comicsServices = inject(ComicsServiceService);
  private comicId!: number;

  detailsComics: Comics[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      const lastSegment = urlSegments[urlSegments.length - 1];
      this.comicId = Number(lastSegment.path);
      console.log(this.comicId);
    });

    this.comicsServices.getComicsById(this.comicId).subscribe((comics) => {
      this.detailsComics = comics;
      console.log(this.detailsComics)
    })
  }
}
