export interface IErrorInterface {
    statusCode: number;
    message: string;
    error?: any; // Optional field to include raw error details if needed
  }
  