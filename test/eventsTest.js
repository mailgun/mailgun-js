var nock = require('nock');
var should = require('should');
import Request from '../lib/request';
import EventClient from '../lib/events';

describe('EventsClient', function() {
  var client, api;

  beforeEach(function() {
    client = new EventClient(new Request({ url: 'https://api.mailgun.net' }));
    api = nock('https://api.mailgun.net');
  });

  afterEach(function() {
    api.done();
  });

  describe('get', function() {
    var response;

    beforeEach(function() {
      response = {
        'items': [
          {
            'type': 'accepted',
            'timestamp': 'Wed, 19 Nov 2014 18:32:57 GMT',
            'gist': 'got it',
            'content': { 'more': 'data' }
          }, {
            'type': 'opened',
            'timestamp': 'Tue, 18 Nov 2014 12:32:57 GMT',
            'gist': 'sent',
            'content': { 'more': 'data' }
          }
        ],
        'paging': {
          'first': 'https://api.mailgun.net/v3/mailgun.com/events/W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImEiOiBmYWxzZSwgImIiOiAiMjAxNC0xMS0xOVQyMDo1NjoyMS42NDAyMTErMDA6MDAifSwgWyJ4IiwgImUiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCBudWxsLCBbWyJkb21haW4ubmFtZSIsICJtYWlsZ3VuLmNvbSJdLCBbImFjY291bnQuaWQiLCAiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIl1dXQ==',
          'last': 'https://api.mailgun.net/v3/mailgun.com/events/W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImIiOiAiMTk3MC0wMS0wMVQwMDowMDowMCswMDowMCIsICJlIjogIjIwMTQtMTEtMTlUMjA6NTY6MjEuNjQwMjEyKzAwOjAwIn0sIFsieCIsICJlIiwgInAiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCBudWxsLCBbWyJkb21haW4ubmFtZSIsICJtYWlsZ3VuLmNvbSJdLCBbImFjY291bnQuaWQiLCAiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIl1dXQ==',
          'next': 'https://api.mailgun.net/v3/mailgun.com/events/W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImEiOiBmYWxzZSwgImIiOiAiMjAxNC0xMS0xNFQyMzowODowNC4yODUwMDArMDA6MDAifSwgWyJ4IiwgImUiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCAibWVzc2FnZSN5NXhkN0pqc1FadVlRQzUyenUyUGlnIiwgW1siZG9tYWluLm5hbWUiLCAibWFpbGd1bi5jb20iXSwgWyJhY2NvdW50LmlkIiwgIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJdXV0=',
          'previous': 'https://api.mailgun.net/v3/mailgun.com/events/W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImIiOiAiMjAxNC0xMS0xOVQxODozMjo1Ny4wMTkwMDArMDA6MDAiLCAiZSI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MTIxMSswMDowMCJ9LCBbIngiLCAiZSIsICJwIiwgImYiXSwgbnVsbCwgW1sic2V2ZXJpdHkiLCAiTk9UIGludGVybmFsIl1dLCAyNSwgIm1lc3NhZ2Ujc3UxSk93N1dRX0dQXzVlRHg5am1tUSIsIFtbImRvbWFpbi5uYW1lIiwgIm1haWxndW4uY29tIl0sIFsiYWNjb3VudC5pZCIsICIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEiXV1d'
        }
      };
    });

    it('fetches all events', function() {
      api.get('/v3/domain.com/events').reply(200, response);

      return client.get('domain.com').then(function(data) {
        var e;

        e = data.items[0];
        e.type.should.eql('accepted');
        e.gist.should.eql('got it');
        e.timestamp.should.eql('Wed, 19 Nov 2014 18:32:57 GMT');
        e.content.should.eql({ 'more': 'data' });

        e = data.items[1];
        e.type.should.eql('opened');
        e.gist.should.eql('sent');
        e.timestamp.should.eql('Tue, 18 Nov 2014 12:32:57 GMT');
        e.content.should.eql({ 'more': 'data' });
      });
    });

    it('fetches single page', function() {
      api.get('/v3/domain.com/events/mypageid').reply(200, response);

      return client.get('domain.com', { page: 'mypageid' }).then(function(data) {
        var e;

        e = data.items[0];
        e.type.should.eql('accepted');
        e.gist.should.eql('got it');
        e.timestamp.should.eql('Wed, 19 Nov 2014 18:32:57 GMT');
        e.content.should.eql({ 'more': 'data' });

        e = data.items[1];
        e.type.should.eql('opened');
        e.gist.should.eql('sent');
        e.timestamp.should.eql('Tue, 18 Nov 2014 12:32:57 GMT');
        e.content.should.eql({ 'more': 'data' });
      });
    });

    it('parses page links', function() {
      api.get('/v3/domain.com/events').reply(200, response);

      return client.get('domain.com').then(function(data) {
        var page;

        page = data.pages.first;
        page.url.should.eql('https://api.mailgun.net/v3/mailgun.com/events/W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImEiOiBmYWxzZSwgImIiOiAiMjAxNC0xMS0xOVQyMDo1NjoyMS42NDAyMTErMDA6MDAifSwgWyJ4IiwgImUiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCBudWxsLCBbWyJkb21haW4ubmFtZSIsICJtYWlsZ3VuLmNvbSJdLCBbImFjY291bnQuaWQiLCAiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIl1dXQ==');
        page.number.should.eql('W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImEiOiBmYWxzZSwgImIiOiAiMjAxNC0xMS0xOVQyMDo1NjoyMS42NDAyMTErMDA6MDAifSwgWyJ4IiwgImUiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCBudWxsLCBbWyJkb21haW4ubmFtZSIsICJtYWlsZ3VuLmNvbSJdLCBbImFjY291bnQuaWQiLCAiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIl1dXQ==');

        page = data.pages.last;
        page.url.should.eql('https://api.mailgun.net/v3/mailgun.com/events/W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImIiOiAiMTk3MC0wMS0wMVQwMDowMDowMCswMDowMCIsICJlIjogIjIwMTQtMTEtMTlUMjA6NTY6MjEuNjQwMjEyKzAwOjAwIn0sIFsieCIsICJlIiwgInAiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCBudWxsLCBbWyJkb21haW4ubmFtZSIsICJtYWlsZ3VuLmNvbSJdLCBbImFjY291bnQuaWQiLCAiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIl1dXQ==');
        page.number.should.eql('W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImIiOiAiMTk3MC0wMS0wMVQwMDowMDowMCswMDowMCIsICJlIjogIjIwMTQtMTEtMTlUMjA6NTY6MjEuNjQwMjEyKzAwOjAwIn0sIFsieCIsICJlIiwgInAiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCBudWxsLCBbWyJkb21haW4ubmFtZSIsICJtYWlsZ3VuLmNvbSJdLCBbImFjY291bnQuaWQiLCAiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxIl1dXQ==');

        page = data.pages.next;
        page.url.should.eql('https://api.mailgun.net/v3/mailgun.com/events/W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImEiOiBmYWxzZSwgImIiOiAiMjAxNC0xMS0xNFQyMzowODowNC4yODUwMDArMDA6MDAifSwgWyJ4IiwgImUiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCAibWVzc2FnZSN5NXhkN0pqc1FadVlRQzUyenUyUGlnIiwgW1siZG9tYWluLm5hbWUiLCAibWFpbGd1bi5jb20iXSwgWyJhY2NvdW50LmlkIiwgIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJdXV0=');
        page.number.should.eql('W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImEiOiBmYWxzZSwgImIiOiAiMjAxNC0xMS0xNFQyMzowODowNC4yODUwMDArMDA6MDAifSwgWyJ4IiwgImUiLCAiZiJdLCBudWxsLCBbWyJzZXZlcml0eSIsICJOT1QgaW50ZXJuYWwiXV0sIDI1LCAibWVzc2FnZSN5NXhkN0pqc1FadVlRQzUyenUyUGlnIiwgW1siZG9tYWluLm5hbWUiLCAibWFpbGd1bi5jb20iXSwgWyJhY2NvdW50LmlkIiwgIjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJdXV0=');

        page = data.pages.previous;
        page.url.should.eql('https://api.mailgun.net/v3/mailgun.com/events/W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImIiOiAiMjAxNC0xMS0xOVQxODozMjo1Ny4wMTkwMDArMDA6MDAiLCAiZSI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MTIxMSswMDowMCJ9LCBbIngiLCAiZSIsICJwIiwgImYiXSwgbnVsbCwgW1sic2V2ZXJpdHkiLCAiTk9UIGludGVybmFsIl1dLCAyNSwgIm1lc3NhZ2Ujc3UxSk93N1dRX0dQXzVlRHg5am1tUSIsIFtbImRvbWFpbi5uYW1lIiwgIm1haWxndW4uY29tIl0sIFsiYWNjb3VudC5pZCIsICIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEiXV1d');
        page.number.should.eql('W3siYSI6IGZhbHNlLCAiYiI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MDIxMSswMDowMCJ9LCB7ImIiOiAiMjAxNC0xMS0xOVQxODozMjo1Ny4wMTkwMDArMDA6MDAiLCAiZSI6ICIyMDE0LTExLTE5VDIwOjU2OjIxLjY0MTIxMSswMDowMCJ9LCBbIngiLCAiZSIsICJwIiwgImYiXSwgbnVsbCwgW1sic2V2ZXJpdHkiLCAiTk9UIGludGVybmFsIl1dLCAyNSwgIm1lc3NhZ2Ujc3UxSk93N1dRX0dQXzVlRHg5am1tUSIsIFtbImRvbWFpbi5uYW1lIiwgIm1haWxndW4uY29tIl0sIFsiYWNjb3VudC5pZCIsICIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEiXV1d');
      });
    });
  });
});
