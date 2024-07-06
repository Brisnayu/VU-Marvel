import { ApiResultSeries, ApiSeriesResponse } from "../models/series/api-series.model";
import { Series } from "../models/series/series.model";

export function transformApiSeriesResponse(apiSeriesResponse: ApiSeriesResponse): Series[] {
  return apiSeriesResponse.data.results.map((apiSeries) => transformApiSeries(apiSeries))
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