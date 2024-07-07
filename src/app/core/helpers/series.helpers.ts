import { ApiResponse } from "../models/apiResponse.model"
import { ApiResultSeries, Series } from "../models/series.model"


export function transformApiSeriesResponse(apiSeriesResponse: ApiResponse<ApiResultSeries>): Series[] {
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