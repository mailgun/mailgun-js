var nock = require('nock');
var should = require('should');
import Request from '../lib/request';
import DomainClient from '../lib/domains';

describe('DomainClient', function() {
  var client, api;

  beforeEach(function() {
    client = new DomainClient(new Request({ url: 'https://api.mailgun.net' }));
    api = nock('https://api.mailgun.net');
  });

  afterEach(function() {
    api.done();
  });

  describe('list', function() {
    it('fetches all domains', function() {
      var domains = [{
        created_at: 'Sun, 19 Oct 2014 18:49:36 GMT',
        name: 'testing.example.com',
        smtp_login: 'postmaster@testing.example.com',
        smtp_password: 'password',
        spam_action: 'disabled',
        state: 'unverified',
        type: 'custom',
        wildcard: true,
        skip_verification: true,
        require_tls: true
      }];

      api.get('/v3/domains').reply(200, {
        'items': domains
      });

      return client.list().then(function(domains) {
        domains[0].should.eql({
          created_at: 'Sun, 19 Oct 2014 18:49:36 GMT',
          name: 'testing.example.com',
          receiving_dns_records: null,
          require_tls: true,
          sending_dns_records: null,
          skip_verification: true,
          smtp_login: 'postmaster@testing.example.com',
          smtp_password: 'password',
          spam_action: 'disabled',
          state: 'unverified',
          type: 'custom',
          wildcard: true
        });
      });
    });
  });

  describe('get', function() {
    it('gets a specific domain and populates dns records', function() {
      var domainData = {
        created_at: 'Sun, 19 Oct 2014 18:49:36 GMT',
        name: 'testing.example.com',
        smtp_login: 'postmaster@testing.example.com',
        smtp_password: 'password',
        spam_action: 'disabled',
        state: 'unverified',
        type: 'custom',
        wildcard: true,
        skip_verification: true,
        require_tls: true
      };

      api.get('/v3/domains/testing.example.com').reply(200, {
        domain: domainData,
        receiving_dns_records: [],
        sending_dns_records: []
      });

      return client.get('testing.example.com').then(function(domain) {
        domain.should.eql({
          created_at: 'Sun, 19 Oct 2014 18:49:36 GMT',
          name: 'testing.example.com',
          receiving_dns_records: [],
          require_tls: true,
          sending_dns_records: [],
          skip_verification: true,
          smtp_login: 'postmaster@testing.example.com',
          smtp_password: 'password',
          spam_action: 'disabled',
          state: 'unverified',
          type: 'custom',
          wildcard: true
        });
      });
    });
  });

  describe('create', function() {
    it('creates a domain', function() {
      var domainData = {
        created_at: 'Sun, 19 Oct 2014 18:49:36 GMT',
        name: 'another.example.com',
        smtp_login: 'postmaster@another.example.com',
        smtp_password: 'password',
        spam_action: 'disabled',
        state: 'unverified',
        type: 'custom',
        wildcard: true,
        skip_verification: true,
        require_tls: true
      };

      api.post('/v3/domains').reply(200, {
        domain: domainData,
        receiving_dns_records: [],
        sending_dns_records: []
      });

      return client.create({name: 'another.example.com'}).then(function(domain) {
        domain.should.eql({
          created_at: 'Sun, 19 Oct 2014 18:49:36 GMT',
          name: 'another.example.com',
          receiving_dns_records: [],
          require_tls: true,
          sending_dns_records: [],
          skip_verification: true,
          smtp_login: 'postmaster@another.example.com',
          smtp_password: 'password',
          spam_action: 'disabled',
          state: 'unverified',
          type: 'custom',
          wildcard: true
        });
      });
    });
  });

  describe('destroy', function() {
    it('deletes a domain', function() {
      api.delete('/v3/domains/test.example.com').reply(200, {
        message: 'domain deleted'
      });

      return client.destroy('test.example.com').then(function(data) {
        data.should.eql({
          message: 'domain deleted'
        });
      });
    });
  });

  describe('getTracking', function() {
    it('fetches all tracking settings', function() {
      api.get('/v3/domains/domain.com/tracking').reply(200, {
        'tracking': {
          'open': { 'active': true },
          'click': { 'active': true },
          'unsubscribe': { 'active': true, 'html_footer': 'html', 'text_footer': 'text' }
        }
      });

      return client.getTracking('domain.com').then(function(tracking) {
        tracking.open.should.eql({ 'active': true });
      });
    });
  });

  describe('updateTracking', function() {
    it('updates tracking settings', function() {
      api.put('/v3/domains/domain.com/tracking/open', 'active=true').reply(200, {
        'message': 'Tracking settings have been updated',
        'open': {
          'active': true
        }
      });

      return client.updateTracking('domain.com', 'open', { active: true }).then(function(result) {
        result.should.eql({
          message: 'Tracking settings have been updated',
          open: {
            active: true
          }
        });
      });
    });
  });
});
