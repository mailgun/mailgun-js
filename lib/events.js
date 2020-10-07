'use strict';

const map = require('lodash.map');
const last = require('lodash.last');
const indexBy = require('lodash.indexby');
const urljoin = require('url-join');

class EventClient {
  constructor(request) {
    this.request = request;
  }

  _parsePageNumber(url) {
    return last(url.split('/'));
  }

  _parsePage(id, url) {
    return { id: id, number: this._parsePageNumber(url), url: url };
  }

  _parsePageLinks(response) {
    let pages;

    pages = {};
    pages = map(response.body.paging, (url, id) => this._parsePage(id, url));

    return indexBy(pages, 'id');
  }

  _parseEventList(response) {
    return {
      items: response.body.items,
      pages: this._parsePageLinks(response)
    };
  }

  get(domain, query) {
    let url;

    if (query && query.page) {
      url = urljoin('/v2', domain, 'events', query.page);
      delete query.page;
    } else {
      url = urljoin('/v2', domain, 'events');
    }

    return this.request.get(url, query).then(response => this._parseEventList(response));
  }
}

module.exports = EventClient;
