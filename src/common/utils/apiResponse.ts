export interface ApiResponse<T> {
  message: string;
  data?: T;
  meta?: any;
}

export const successResponse = <T>({
  message,
  data,
  meta,
}: ApiResponse<T>) => {
  return {
    success: true,
    message,
    data,
    meta,
  };
};

export const errorResponse = ({
  message,
}: {
  message: string;
}) => {
  return {
    success: false,
    message,
  };
};