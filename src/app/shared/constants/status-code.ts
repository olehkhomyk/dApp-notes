export enum HttpStatusCode {
  UNKNOWN = 0,
  OK = 200,
  MULTI_STATUS = 207,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  PRECONDITION_FAILED = 412,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
}

export enum FirebaseErrorCode {
  EMAIL_EXISTS = 'auth/email-already-in-use',
  INVALID_EMAIL = 'auth/invalid-email',
  USER_DISABLED = 'auth/user-disabled',
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
  INVALID_CREDENTIALS = 'auth/invalid-credential',
}
