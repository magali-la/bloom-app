// CUSTOM ERROR TYPES
// HTTP Error
export class HTTPError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HTTPError";
  }
};

// Network Error
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
};