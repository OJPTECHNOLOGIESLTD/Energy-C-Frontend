export interface HttpResponse<T> {
    success: boolean;
    statusCode: number;
    message: string;
    data: T;
  }
  
  export interface HttpError {
    response: {
      data: {
        message: string;
      };
    };
  }
  
  export interface PaginationDataRes<T> {
    nextPage: {
      page: number;
      limit: number;
    };
    prevPage: {
      page: number;
      limit: number;
    };
    total: number;
    totalInDb: number;
    result: T;
  }