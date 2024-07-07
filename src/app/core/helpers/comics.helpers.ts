import { ApiResponse } from "../models/apiResponse.model";
import { ApiResultComics, Comics } from "../models/comics.model";

export class ComicsTransformer {
  public transformApiComicsResponse(apiComicsResponse: ApiResponse<ApiResultComics>): Comics[] {
    return apiComicsResponse.data.results.map((apiComics) => this.transformApiComics(apiComics));
  }

  private transformApiComics(apiResultComics: ApiResultComics): Comics {
    return {
      id: apiResultComics.id,
      title: apiResultComics.title,
      description: apiResultComics.description,
      modified: apiResultComics.modified,
      thumbnail: `${apiResultComics.thumbnail.path}.${apiResultComics.thumbnail.extension}`,
    };
  }
}