export interface ApiResponse<T> {
  code: number;
  status: string;
  data: {
    results: T[]
  };
}