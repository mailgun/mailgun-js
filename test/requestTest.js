// jscs:disable requireDotNotation
var btoa = require('btoa');
var nock = require('nock');
var should = require('should');
import Request from '../lib/request';

describe('Request', function() {
  var headers;

  beforeEach(function() {
    headers = {};
    headers['Authorization'] = 'Basic ' + btoa('api:key');
  });

  describe('request', function() {
    it('makes API request', function() {
      var req, res;

      headers['Test'] = 'Custom Header';
      headers['X-CSRF-Token'] = 'protectme';

      nock('https://api.mailgun.com', { reqheaders: headers })
        .get('/v3/some/resource?query=parameter', { 'request': 'body' })
        .reply(200);

      req = new Request({ username: 'api', key: 'key', url: 'https://api.mailgun.com', headers: {
        'X-CSRF-Token': 'protectme'
      }});
      res = req.request('GET', '/v3/some/resource', {
        headers: { 'Test': 'Custom Header' },
        query: { 'query': 'parameter' },
        body: { 'request': 'body' }
      });

      return res;
    });

    it('parses API response', function() {
      var req, res;

      nock('https://api.mailgun.com', { reqheaders: headers })
        .get('/v3/some/resource')
        .reply(200, { id: 1, message: 'hello' });

      req = new Request({ username: 'api', key: 'key', url: 'https://api.mailgun.com' });
      res = req.request('GET', '/v3/some/resource').then(function(response) {
        response.status.should.eql(200);
        response.body.should.eql({ id: 1, message: 'hello' });
      });

      return res;
    });

    it('handles API error', function() {
      var req, res;

      nock('https://api.mailgun.com', { reqheaders: headers })
        .get('/v3/some/resource')
        .reply(429, { message: 'Too many requests' });

      req = new Request({ username: 'api', key: 'key', url: 'https://api.mailgun.com' });
      res = req.request('GET', '/v3/some/resource').catch(function(error) {
        error.status.should.eql(429);
        error.message.should.eql('Too many requests');
      });

      return res;
    });
  });

  describe('query', function() {
    it('sends data as query parameter', function() {
      var req, res;

      nock('https://api.mailgun.com')
        .get('/v3/some/resource?query=data')
        .reply(200);

      req = new Request({ url: 'https://api.mailgun.com' });
      res = req.query('GET', '/v3/some/resource', { query: 'data' });

      return res;
    });
  });

  describe('command', function() {
    it('sends data as form-encoded request body', function() {
      var req, res;

      nock('https://api.mailgun.com')
        .post('/v3/some/resource', 'query=data')
        .reply(200);

      req = new Request({ url: 'https://api.mailgun.com' });
      res = req.command('POST', '/v3/some/resource', { query: 'data' });

      return res;
    });
  });
});
