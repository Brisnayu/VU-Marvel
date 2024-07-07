export interface ApiResultComics {
  id: number;
  title: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface Comics {
  id: number;
  title: string;
  description: string;
  modified: string;
  thumbnail: string;
}