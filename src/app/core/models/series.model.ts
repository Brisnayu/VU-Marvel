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

export interface ApiSeriesComics {
  id: number;
  title: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

export interface SeriesComics {
  id: number;
  title: string;
  modified: string;
  thumbnail: string;
}

export interface Series {
  id: number;
  title: string;
  startYear: number;
  endYear: number;
  thumbnail: string;
  comics: SeriesComics;
}