import { ApiResponse } from "../models/apiResponse.model";
import { ApiResultSeries, ApiSeriesComics, Series, SeriesComics } from "../models/series.model";

export class SeriesTransformer {
  public transformApiSeriesResponse(apiSeriesResponse: ApiResponse<ApiResultSeries>): Series[] {
    return apiSeriesResponse.data.results.map((apiSeries) => this.transformApiSeries(apiSeries));
  }

  public transformApiSeriesComicsResponse(apiSeriesResponse: ApiResponse<ApiSeriesComics>): SeriesComics[] {
    return apiSeriesResponse.data.results.map((apiSeries) => this.transformApiComicsOfSeries(apiSeries));
  }

  private transformApiSeries(apiResultSeries: ApiResultSeries): Series {
    return {
      id: apiResultSeries.id,
      title: apiResultSeries.title,
      startYear: apiResultSeries.startYear,
      endYear: apiResultSeries.endYear,
      thumbnail: `${apiResultSeries.thumbnail.path}.${apiResultSeries.thumbnail.extension}`,
      comics: apiResultSeries.comics,
    };
  }

  private transformApiComicsOfSeries(apiResultSeries: ApiSeriesComics): SeriesComics {
    return {
      id: apiResultSeries.id,
      title: apiResultSeries.title,
      modified: apiResultSeries.modified,
      thumbnail: `${apiResultSeries.thumbnail.path}.${apiResultSeries.thumbnail.extension}`,
    };
  }
}