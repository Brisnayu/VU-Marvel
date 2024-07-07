import { ApiResponse } from "../models/apiResponse.model"
import { ApiResultComics, Comics } from "../models/comics.model"

export function transformApiComicsResponse(apiComicsResponse: ApiResponse<ApiResultComics>): Comics[] {
  return apiComicsResponse.data.results.map((apiComics) => transformApiComics(apiComics))
}

export function transformApiComics(ApiResultComics: ApiResultComics): Comics {
  return {
    id: ApiResultComics.id,
    title: ApiResultComics.title,
    description: ApiResultComics.description,
    modified: ApiResultComics.modified,
    thumbnail: `${ApiResultComics.thumbnail.path}.${ApiResultComics.thumbnail.extension}`,
  }
}