'use strict';

class APIError extends Error {
  constructor(response) {
    super(response.message || response.body && (response.body.message || response.body.error));

    this.status = response.status;
    this.message = response.message || response.body && (response.body.message || response.body.error);
    this.id = response.id || response.headers && (response.headers['x-mailgun-request-id']);
  }
}

module.exports = APIError;
