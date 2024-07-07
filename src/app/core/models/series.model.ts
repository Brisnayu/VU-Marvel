export interface ApiResultSeries {
  id: number;
  title: string;
  startYear: number;
  endYear: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: SeriesComics;
}

export interface SeriesComics {
  id: number;
  title: string;
}

export interface Series {
  id: number;
  title: string;
  startYear: number;
  endYear: number;
  thumbnail: string;
  comics: SeriesComics;
}