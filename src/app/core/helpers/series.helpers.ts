import { ApiResponse } from "../models/apiResponse.model"
import { ApiResultSeries, ApiSeriesComics, Series, SeriesComics } from "../models/series.model"


export function transformApiSeriesResponse(apiSeriesResponse: ApiResponse<ApiResultSeries>): Series[] {
  return apiSeriesResponse.data.results.map((apiSeries) => transformApiSeries(apiSeries))
}

export function transformApiSeriesComicsResponse(apiSeriesResponse: ApiResponse<ApiSeriesComics>): SeriesComics[] {
  return apiSeriesResponse.data.results.map((apiSeries) => transformApiComicsOfSeries(apiSeries))
}

export function transformApiSeries(ApiResultSeries: ApiResultSeries): Series {
  return {
    id: ApiResultSeries.id,
    title: ApiResultSeries.title,
    startYear: ApiResultSeries.startYear,
    endYear: ApiResultSeries.endYear,
    thumbnail: `${ApiResultSeries.thumbnail.path}.${ApiResultSeries.thumbnail.extension}`,
    comics: ApiResultSeries.comics,
  }
}

export function transformApiComicsOfSeries(ApiResultSeries: ApiSeriesComics): SeriesComics {
  return {
    id: ApiResultSeries.id,
    title: ApiResultSeries.title,
    modified: ApiResultSeries.modified,
    thumbnail: `${ApiResultSeries.thumbnail.path}.${ApiResultSeries.thumbnail.extension}`,
  }
}