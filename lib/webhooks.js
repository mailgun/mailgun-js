'use strict';

var map = require('lodash.map');
var urljoin = require('url-join');

class Webhook {
  constructor(id, data) {
    this.id = id;
    this.url = data.url;
  }
}

class WebhookClient {
  constructor(request) {
    this.request = request;
  }

  _parseWebhookList(response) {
    return response.body.webhooks;
  }

  _parseWebhookWithID(id) {
    return function(response) {
      return new Webhook(id, response.body.webhook);
    };
  }

  _parseWebhookTest(response) {
    return { code: response.body.code, message: response.body.message };
  }

  list(domain, query) {
    return this.request.get(urljoin('/v3/domains', domain, 'webhooks'), query)
      .then(this._parseWebhookList);
  }

  get(domain, id) {
    return this.request.get(urljoin('/v3/domains', domain, 'webhooks', id))
      .then(this._parseWebhookWithID(id));
  }

  create(domain, id, url, test) {
    if (test) {
      return this.request.put(urljoin('/v3/domains', domain, 'webhooks', id, 'test'), {url: url})
        .then(this._parseWebhookTest);
    } else {
      return this.request.post(urljoin('/v3/domains', domain, 'webhooks'), { id: id, url: url})
        .then(this._parseWebhookWithID(id));
    }
  }

  update(domain, id, url) {
    return this.request.put(urljoin('/v3/domains', domain, 'webhooks', id), {url: url})
      .then(this._parseWebhookWithID(id));
  }

  destroy(domain, id) {
    return this.request.delete(urljoin('/v3/domains', domain, 'webhooks', id))
      .then(this._parseWebhookWithID(id));
  }
}

module.exports = WebhookClient;
