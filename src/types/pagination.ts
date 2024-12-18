export interface paginationQueries {
  take?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: string;
}

export interface paginationMeta {
  page: number;
  take: number;
  total: number;
}

export interface PageableResponse<T> {
  data: T[];
  meta: paginationMeta;
}
