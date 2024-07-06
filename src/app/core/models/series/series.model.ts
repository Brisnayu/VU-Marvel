import { Comics } from "./api-series.model";

export interface Series {
  id: number;
  title: string;
  startYear: number;
  endYear: number;
  thumbnail: string;
  comics: Comics;
}

export interface DataApi<T> {
  code: number
  status: string
  data: {
    results: T[]
  }
}

export interface SeriesComics {
  id: number;
  title: string;
}