import { Comics } from "./api-series.model";

export interface Series {
  id: number;
  title: string;
  startYear: number;
  endYear: number;
  thumbnail: string;
  comics: Comics;
}