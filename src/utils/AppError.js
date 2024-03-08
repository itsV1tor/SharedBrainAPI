export class AppError {
  constructor(statusCode = 400, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
