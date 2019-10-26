'use strict';

var map = require('lodash.map');
var urljoin = require('url-join');

class Domain {
  constructor(data, receiving, sending) {
    this.name = data.name;
    this.require_tls = data.require_tls;
    this.skip_verification = data.skip_verification;
    this.state = data.state;
    this.wildcard = data.wildcard;
    this.spam_action = data.spam_action;
    this.created_at = data.created_at;
    this.smtp_password = data.smtp_password;
    this.smtp_login = data.smtp_login;
    this.type = data.type;

    this.receiving_dns_records = receiving || null;
    this.sending_dns_records = sending || null;
  }
}

class DomainClient {
  constructor(request) {
    this.request = request;
  }

  _parseMessage(response) {
    return response.body;
  }

  _parseDomainList(response) {
    return map(response.body.items, function(item) {
      return new Domain(item);
    });
  }

  _parseDomain(response) {
    return new Domain(
      response.body.domain,
      response.body.receiving_dns_records,
      response.body.sending_dns_records
    );
  }

  _parseTrackingSettings(response) {
    return response.body.tracking;
  }

  _parseTrackingUpdate(response) {
    return response.body;
  }

  list(query) {
    return this.request.get('/v3/domains', query)
      .then(this._parseDomainList);
  }

  get(domain) {
    return this.request.get(`/v3/domains/${domain}`)
      .then(this._parseDomain);
  }

  create(data) {
    return this.request.post(`/v3/domains`, data)
      .then(this._parseDomain);
  }

  destroy(domain) {
    return this.request.delete(`/v3/domains/${domain}`)
      .then(this._parseMessage);
  }

  // Tracking

  getTracking(domain) {
    return this.request.get(urljoin('/v3/domains', domain, 'tracking'))
      .then(this._parseTrackingSettings);
  }

  updateTracking(domain, type, data) {
    return this.request.put(urljoin('/v3/domains', domain, 'tracking', type), data)
      .then(this._parseTrackingUpdate);
  }
}

module.exports = DomainClient;
