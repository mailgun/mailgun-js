# Mailgun.js [![Build Status](https://travis-ci.org/mailgun/mailgun-js.svg)](https://travis-ci.org/mailgun/mailgun-js)

A javascript sdk for Mailgun built with webpack, babel & es6. This can be used in node or in the browser*.

NOTE: If used in the browser, a proxy is required to communicate with the Mailgun api due to cors limitations. Also, do not publish your private api key in frontend code.

__Table of Contents__

- [Documentation](#documentation)
  - [Install](#install)
  - [Setup Client](#setup-client)
  - [Methods](#methods)
  - [Browser Demo](#browser-demo)
  - [Examples](https://github.com/mailgun/mailgun-js/tree/c379f79ea2a2e0f825103751a3a102d8bdd3dd1b/example)
- [Development](#development)
  - [Requirements](#requirements)
  - [Build](#build)
  - [Tests](#tests)
  - [Release Process](#release-process)

# Documentation

## Install

- Requires node.js >= 12.x

Install mailgun.js with:

```sh
npm install mailgun.js
```

## Setup Client

Next, require the module and instantiate a mailgun client by calling `mailgun.client` with basic auth credentials `(username: 'api', key: 'key-yourkeyhere')`.

```js
var mailgun = require('mailgun.js');
var mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});
```

To use `validate` and `parse` methods, you must additionally include `public_key`. If you're using only those methods, `key` can be an empty string.

```js
var mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
  public_key: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-yourkeyhere'
});
```

In the case your mailgun account is eu hosted you would need to define eu's subdomain as `url` in mailgun's Client constructor:

```js
var mailgun = require('mailgun.js');
var mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere', url: 'https://api.eu.mailgun.net'});
```


## Methods

The following service methods are available to instantiated clients. The examples assume you have already created a mailgun client as `mg` with valid credentials.
- [Mailgun.js ![Build Status](https://travis-ci.org/mailgun/mailgun-js)](#mailgunjs-img-srchttpstravis-ciorgmailgunmailgun-jssvg-altbuild-status)
- [Documentation](#documentation)
  - [Install](#install)
  - [Setup Client](#setup-client)
  - [Methods](#methods)
    - [messages](#messages)
      - [create](#create)
    - [domains](#domains)
      - [list](#list)
      - [get](#get)
      - [create](#create-1)
      - [destroy](#destroy)
      - [getTracking](#gettracking)
      - [updateTracking](#updatetracking)
    - [events](#events)
      - [get](#get-1)
    - [stats](#stats)
      - [getDomain](#getdomain)
      - [getAccount](#getaccount)
    - [suppressions](#suppressions)
      - [list](#list-1)
      - [get](#get-2)
      - [create](#create-2)
    - [webhooks](#webhooks)
      - [list](#list-2)
      - [get](#get-3)
      - [create](#create-3)
      - [update](#update)
      - [destroy](#destroy-1)
    - [routes](#routes)
      - [list](#list-3)
      - [get](#get-4)
      - [create](#create-4)
      - [update](#update-1)
      - [destroy](#destroy-2)
    - [validate](#validate)
      - [get](#get-5)
    - [parse](#parse)
      - [get](#get-6)
  - [Browser Demo](#browser-demo)
- [Development](#development)
  - [Requirements](#requirements)
  - [Build](#build)
  - [Tests](#tests)
  - [Release Process](#release-process)
  - [TODO](#todo)

Method naming conventions:
- `get` or `get{{Item}}` - expected response for client is a single object
- `list` or `list{{Items}}` - expected response for client is a list of objects
- `create` or `create{{Item}}` - expected response for client is a single object
- `update` or `update{{Item}}` - expected response is an object with a status message
- `destroy` or `destroy{{Item}}` - expected response is an object with a status message

### messages

#### create

`mg.messages.create(domain, data)` - [api docs](https://documentation.mailgun.com/en/latest/api-sending.html#sending)

HTML/TEXT Example:

```js
mg.messages.create('sandbox-123.mailgun.org', {
    from: "Excited User <mailgun@sandbox-123.mailgun.org>",
    to: ["test@example.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
    html: "<h1>Testing some Mailgun awesomness!</h1>"
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

MIME Example:

```js
mg.messages.create('sandbox-123.mailgun.org', {
    from: "Excited User <mailgun@sandbox-123.mailgun.org>",
    to: ["test@example.com"],
    subject: "Hello",
    message: "<mime encoded string here>"
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  id: '<20151025002517.117282.79817@sandbox-123.mailgun.org>',
  message: 'Queued. Thank you.'
}
```

Options:

Parameter         | Description
:---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
to                | Email address of the recipient(s). Example: "Bob <bob@host.com>". You can use commas to separate multiple recipients (e.g.: "test@example.com,test@example.com" or ["test@example.com", "test@example.com"]). Make sure to include all To, Cc and Bcc recipients of the message.
html              | HTML version of the message.
text              | Text version of the message.
message           | MIME string of the message. Make sure to use multipart/form-data to send this as a file upload.
attachment        | File attachment. You can post multiple attachment values. Important: You must use multipart/form-data encoding when sending attachments. Also you can use `{data: file, filename: filename}` to define custom filename.
o:tag             | Tag string. See Tagging for more information.
o:campaign        | Id of the campaign the message belongs to. See um-campaign-analytics for details.
o:deliverytime    | Desired time of delivery. See Date Format. Note: Messages can be scheduled for a maximum of 3 days in the future.
o:dkim            | Enables/disabled DKIM signatures on per-message basis. Pass yes or no
o:testmode        | Enables sending in test mode. Pass yes if needed. See Sending in Test Mode
o:tracking        | Toggles tracking on a per-message basis, see Tracking Messages for details. Pass yes or no.
o:tracking-clicks | Toggles clicks tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes, no or htmlonly.
o:tracking-opens  | Toggles opens tracking on a per-message basis. Has higher priority than domain-level setting. Pass yes or no.
h:X-My-Header     | h: prefix followed by an arbitrary value allows to append a custom MIME header to the message (X-My-Header in this case). For example, h:Reply-To to specify Reply-To address.
v:my-var          | v: prefix followed by an arbitrary name allows to attach a custom JSON data to the message. See Attaching Data to Messages for more information.

### domains

#### list

`mg.messages.list(query)` - [api docs](https://documentation.mailgun.com/en/latest/api-domains.html)

Example:

```js
mg.messages.list()
  .then(domains => console.log(domains)) // logs array of domains
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: array of Domain instances

```
[{
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
}]
```

Options

| Parameter | Description                                           |
|:----------|:------------------------------------------------------|
| limit     | Maximum number of records to return. (100 by default) |
| skip      | Number of records to skip. (0 by default)             |

#### get

`mg.messages.get()`

Example:

```js
mg.messages.get()
  .then(domains => console.log(domains)) // logs array of domains
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: Domain instance

```
{
  created_at: 'Sun, 19 Oct 2014 18:49:36 GMT',
  name: 'testing.example.com',
  receiving_dns_records: [{
      "name": "testing.example.com",
      "record_type": "TXT",
      "valid": "unknown",
      "value": "v=spf1 include:mailgun.org ~all"
    },
    {
      "name": "k1._domainkey.testing.example.com",
      "record_type": "TXT",
      "valid": "unknown",
      "value": "k=rsa; 123456"
    },
    {
      "name": "email.testing.example.com",
      "record_type": "CNAME",
      "valid": "unknown",
      "value": "mailgun.org"
    }],
  require_tls: true,
  sending_dns_records: [{
      "priority": "10",
      "record_type": "MX",
      "valid": "unknown",
      "value": "mxa.mailgun.org"
    },
    {
      "priority": "10",
      "record_type": "MX",
      "valid": "unknown",
      "value": "mxb.mailgun.org"
    }],
  skip_verification: true,
  smtp_login: 'postmaster@testing.example.com',
  smtp_password: 'password',
  spam_action: 'disabled',
  state: 'unverified',
  type: 'custom',
  wildcard: true
}
```

#### create

`mg.domains.create(data)`

Example:

```js
mg.domains.create({name: 'foobar.example.com'})
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Options:

| Parameter     | Description                                                                                                                                   |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| name          | Name of the domain (ex. domain.com)                                                                                                           |
| smtp_password | Password for SMTP authentication                                                                                                              |
| spam_action   | disabled or tag Disable, no spam filtering will occur for inbound messages. Tag, messages will be tagged wtih a spam header. See Spam Filter. |
| wildcard      | true or false Determines whether the domain will accept email for sub-domains.                                                                |

Promise Returns: Domain instance

```
{
  created_at: 'Sun, 19 Oct 2014 18:49:36 GMT',
  name: 'foobar.example.com',
  receiving_dns_records: [{
      "name": "foobar.example.com",
      "record_type": "TXT",
      "valid": "unknown",
      "value": "v=spf1 include:mailgun.org ~all"
    },
    {
      "name": "k1._domainkey.foobar.example.com",
      "record_type": "TXT",
      "valid": "unknown",
      "value": "k=rsa; 123456"
    },
    {
      "name": "email.foobar.example.com",
      "record_type": "CNAME",
      "valid": "unknown",
      "value": "mailgun.org"
    }],
  require_tls: true,
  sending_dns_records: [{
      "priority": "10",
      "record_type": "MX",
      "valid": "unknown",
      "value": "mxa.mailgun.org"
    },
    {
      "priority": "10",
      "record_type": "MX",
      "valid": "unknown",
      "value": "mxb.mailgun.org"
    }],
  skip_verification: true,
  smtp_login: 'postmaster@foobar.example.com',
  smtp_password: 'password',
  spam_action: 'disabled',
  state: 'unverified',
  type: 'custom',
  wildcard: false
}
```
#### destroy

`mg.domains.destroy(domain)`

Example:

```js
mg.domains.destroy('foobar.example.com')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  message: "Domain has been deleted"
}
```

#### getTracking

`mg.domains.getTracking(domain)`

Example:

```js
mg.domains.getTracking('foobar.example.com')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  "click": {
    "active": false
  },
  "open": {
    "active": false
  },
  "unsubscribe": {
    "active": false,
    "html_footer": "\n<br>\n<p><a href=\"%unsubscribe_url%\">unsubscribe</a></p>\n",
    "text_footer": "\n\nTo unsubscribe click: <%unsubscribe_url%>\n\n"
  }
}
```

#### updateTracking

`mg.domains.updateTracking(domain, trackingType, data)`

Open Tracking Example:

```js
mg.domains.updateTracking('foobar.example.com', 'open', {active: true})
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Open Tracking Options

| Parameter | Description                                |
|:----------|:-------------------------------------------|
| active    | Boolean, enables or disables open tracking |

Promise Returns:

```
{
  message: 'Tracking settings have been updated',
  open: {
    active: true
  }
}
```

Click Tracking Example:

```js
mg.domains.updateTracking('foobar.example.com', 'click', {active: true})
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Click Tracking Options

| Parameter | Description                                 |
|:----------|:--------------------------------------------|
| active    | Boolean, enables or disables click tracking |

Promise Returns:

```
{
  message: 'Tracking settings have been updated',
  click: {
    active: true
  }
}
```

Unsubscribe Tracking Example:

```js
mg.domains.updateTracking('foobar.example.com', 'unsubscribe', {
    active: true,
    html_footer: "\n<br>\n<p><a href=\"%unsubscribe_url%\">unsubscribe</a></p>\n",
    text_footer: "\n\nTo unsubscribe click: <%unsubscribe_url%>\n\n"
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Unsubscribe Tracking Options

| Parameter   | Description                                                   |
|:------------|:--------------------------------------------------------------|
| active      | Boolean, enables or disables unsubscribe tracking             |
| html_footer | string appended to html emails for managing unsubscribe links |
| text_footer | string appended to html emails for managing unsubscribe links |

Promise Returns:

```
{
  message: 'Tracking settings have been updated',
  "unsubscribe": {
    "active": true,
    "html_footer": "\n<br>\n<p><a href=\"%unsubscribe_url%\">unsubscribe</a></p>\n",
    "text_footer": "\n\nTo unsubscribe click: <%unsubscribe_url%>\n\n"
  }
}
```

### events

#### get

`mg.events.get(domain, query)`

Example:

```js
mg.events.get('foobar.example.com', { page: 'mypageid' })
  .then(data => console.log(data.items)) // logs array of event objects
  .catch(err => console.log(err)); // logs any error
```

Options:


| Parameter | Description                                                                                                                                                                                                                                                                     |
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| page      | Fetches the specified page of log records, assuming that the URL was returned by the previous request                                                                                                                                                                           |
| begin     | The beginning of the search time range. It can be specified as a string (see Date Format) or linux epoch seconds. Refer to Time Range for details.                                                                                                                              |
| end       | The end of the search time range. It can be specified as a string (see Date Format) or linux epoch seconds. Refer to Time Range for details.                                                                                                                                    |
| ascending | Defines the direction of the search time range if the range end time is not specified. Can be either yes or no. Refer to Time Range for details.                                                                                                                                |
| limit     | Number of entries to return. (300 max)                                                                                                                                                                                                                                          |
| <field>   | <field> is the name of the Filter Field. The value of the parameter should be a valid Filter Expression. Several field filters can be specified in one request. If the same field is mentioned, more then once, then all its filter expressions are combined with AND operator. |

Promise Returns: items (array of event objects), pages (paging keys grouped by id)

```
{
 items: [{
    type: 'accepted',
    summary: 'got it',
    content: { more: 'data' },
    timestamp: Wed Nov 19 2014 10:32:57 GMT-0800 (PST) },
  }],
  pages: {
    first: { id: 'first', number: 'W3siYSI6IGZhbHNlLC', url: 'apiurl' },
    last: { id: 'last', number: 'W3siYSI6IGZhbHNlLC', url: 'apiurl' },
    next: { id: 'next', number: W3siYSI6IGZhbHNlLC'', url: 'apiurl' },
    previous: { id: 'previous', number: 'W3siYSI6IGZhbHNlLC', url: 'apiurl' }
  }
}
```

### stats

Stats Options

| Parameter  | Description                                                                                                                |
|:-----------|:---------------------------------------------------------------------------------------------------------------------------|
| event      | The type of the event. For a complete list of all events written to the log see the `Event Types` table below. (Required)  |
| start      | The starting time. Should be in :rfc:`2822#page-14` or unix epoch format. Default: 7 days from the current time.           |
| end        | The ending date. Should be in :rfc:`2822#page-14` or unix epoch format. Default: current time.                             |
| resolution | Can be either ``hour``, ``day`` or ``month``. Default: ``day``                                                             |
| duration   | Period of time with resoluton encoded. If provided, overwrites the start date. See list below.                                             |

Duration is a string that represents a period of time with some resolution. It has a format `[0-9]+[m,d,h]` where

- `h` - an hour
- `d` - a day
- `m` - a month

Examples:

- `24h` - a period of 24 hours (a day) with hourly resolution
- `1d` - a period of 1 day with daily resolution
- `2m` - a period of 2 months with monthly resolution

Event Types

| Event Type   | Description                                                                                                                                                                       |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accepted     | Mailgun accepted the request to send/forward the email and the message has been placed in queue.                                                                                  |
| delivered    | Mailgun sent the email and it was accepted by the recipient email server.                                                                                                         |
| failed       | Mailgun could not deliver the email to the recipient email server.                                                                                                                |
| opened       | The email recipient opened the email and enabled image viewing. Open tracking must be enabled in the Mailgun control panel, and the CNAME record must be pointing to mailgun.org. |
| clicked      | The email recipient clicked on a link in the email. Click tracking must be enabled in the Mailgun control panel, and the CNAME record must be pointing to mailgun.org.            |
| unsubscribed | The email recipient clicked on the unsubscribe link. Unsubscribe tracking must be enabled in the Mailgun control panel.                                                           |
| complained   | The email recipient clicked on the spam complaint button within their email client. Feedback loops enable the notification to be received by Mailgun.                             |
| stored       | Mailgun has stored an incoming message

#### getDomain

`mg.stats.getDomain(domain, query)`

Example:

```js
mg.stats.getDomain('foobar.example.com', {event: ['delivered', 'accepted', 'failed', 'complained']})
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  start: Sun Mar 15 2015 17:00:00 GMT-0700 (PDT),
  end: Sun Mar 22 2015 17:00:00 GMT-0700 (PDT),
  resolution: 'day',
  stats: [{
    time: Sun Mar 15 2015 17:00:00 GMT-0700 (PDT),
    delivered: { smtp: 2, http: 1, total: 3 }
  }]
}
```

#### getAccount

`mg.stats.getDomain(domain, query)`

Example:

```js
mg.stats.getDomain('foobar.example.com', {event: ['delivered', 'accepted', 'failed', 'complained']})
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  start: Sun Mar 15 2015 17:00:00 GMT-0700 (PDT),
  end: Sun Mar 22 2015 17:00:00 GMT-0700 (PDT),
  resolution: 'day',
  stats: [{
    time: Sun Mar 15 2015 17:00:00 GMT-0700 (PDT),
    delivered: { smtp: 2, http: 1, total: 3 }
  }]
}
```

### suppressions

#### list

`mg.suppressions.list(domain, suppressionType, query)`

Bounces Example:

```js
mg.suppressions.list('foobar.example.com', 'bounces')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Unsubscribes Example:

```js
mg.suppressions.list('foobar.example.com', 'unsubscribes')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Complaints Example:

```js
mg.suppressions.list('foobar.example.com', 'complaints')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  items: [
    {
      type: 'bounces',
      address: 'unknown@unknown.com',
      code: 550,
      error: 'No such mailbox',
      created_at: Fri Oct 21 2011 04:02:55 GMT-0700 (PDT)
    }
  ],
  pages: {
    first: { id: 'first', page: '', address: '', url: 'apiurl' },
    last: { id: 'last', page: '', address: '', url: 'apiurl' },
    next: { id: 'next', page: '', address: '', url: 'apiurl' },
    previous: { id: 'prev', page: '', address: '', url: 'apiurl' }
  }
}
```

#### get

`mg.suppressions.get(domain, suppressionType, address)`

Bounces Example:

```js
mg.suppressions.get('foobar.example.com', 'bounces', 'address@example.com')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Unsubscribes Example:

```js
mg.suppressions.get('foobar.example.com', 'unsubscribes', 'address@example.com')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Complaints Example:

```js
mg.suppressions.get('foobar.example.com', 'complaints', 'address@example.com')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Options:

Promise Returns:

```
{
  type: 'bounces',
  address: 'address?@unknown.com',
  tags: [ '*' ],
  created_at: Fri Oct 21 2011 05:02:55 GMT-0700 (PDT)
}
```

#### create

`mg.suppressions.create(domain, suppressionType, array)`

Bounces Example:

```js
mg.suppressions.create('foobar.example.com', 'bounces', [{address: 'bob@example.com'}])
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Bounces Options: Contains an array with the following object properties

| Parameter  | Description                                                                     |
|:-----------|:--------------------------------------------------------------------------------|
| address    | Valid email address                                                             |
| code       | Error code (optional, default: 550)                                             |
| error      | Error description (optional, default: empty string)                             |
| created_at | Timestamp of a bounce event in RFC2822 format (optional, default: current time) |

Promise Returns:

```
{
  message: "1 address has been added to the bounces table"
}
```

Unsubscribes Example:

```js
mg.suppressions.create('foobar.example.com', 'unsubscribes', [{address: 'bob@example.com'}])
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Unsubscribes Options: Contains an array with the following object properties

| Parameter  | Description                                                                                                      |
|:-----------|:-----------------------------------------------------------------------------------------------------------------|
| address    | Valid email address                                                                                              |
| tag        | Tag to unsubscribe from, use * to unsubscribe an address from all domain’s correspondence (optional, default: *) |
| created_at | Timestamp of a bounce event in RFC2822 format (optional, default: current time)                                  |

Promise Returns:

```
{
  message: "1 address has been added to the unsubscribes table"
}
```

Complaints Example:

```js
mg.suppressions.create('foobar.example.com', 'complaints', [{address: 'bob@example.com'}])
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Complaints Options: Contains an array with the following object properties

| Parameter  | Description                                                                                                      |
|:-----------|:-----------------------------------------------------------------------------------------------------------------|
| address    | Valid email address                                                                                              |
| created_at | Timestamp of a bounce event in RFC2822 format (optional, default: current time)                                  |

Promise Returns:

```
{
  message: "1 address has been added to the complaints table"
}
```

### webhooks

#### list

`mg.webhooks.list(domain, query)`

Example:

```js
mg.webhooks.list('foobar.example.com')
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  open: { 'url': 'http://requestb.in' },
  click: { 'url': 'http://requestb.in' },
  bounce: { 'url': 'http://requestb.in' },
  deliver: { 'url': 'http://requestb.in' },
  drop: { 'url': 'http://requestb.in' },
  spam: { 'url': 'http://requestb.in' },
  unsubscribe: { 'url': 'http://requestb.in' },
  click: { 'url': 'http://requestb.in' },
  open: { 'url': 'http://requestb.in' },
}
```

#### get

`mg.webhooks.get(domain, id)`

Example:

```js
mg.webhooks.get('foobar.example.com', 'open') // bounce, deliver, drop, spam, unsubscribe, click, open
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  'open': { 'url': 'http://requestb.in' }
}
```

#### create

`mg.webhooks.create(domain, id, data, test)`

Example:

```js
mg.webhooks.create('foobar.example.com', 'open', 'http://requestb.in') // bounce, deliver, drop, spam, unsubscribe, click, open
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  'open': { 'url': 'http://requestb.in' }
}
```

Test Webhook Example:

```js
mg.webhooks.get('foobar.example.com', 'open', 'http://requestb.in', true) // bounce, deliver, drop, spam, unsubscribe, click, open
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  'code': '500',
  'message': 'Hi!'
}
```

#### update

`mg.webhooks.update(domain, id, url, test)`

Example:

```js
mg.webhooks.update('foobar.example.com', 'open', 'http://requestb.in') // bounce, deliver, drop, spam, unsubscribe, click, open
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  'open': { 'url': 'http://requestb.in' }
}
```

#### destroy

`mg.webhooks.destroy(domain, id)`

Example:

```js
mg.webhooks.update('foobar.example.com', 'open') // bounce, deliver, drop, spam, unsubscribe, click, open
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
```

Promise Returns:

```
{
  'open': { 'url': 'http://requestb.in' }
}
```

### routes

#### list

`mg.routes.list(query)`

Example:

```js
mg.routes.list()
  .then(data => console.log(data)) // logs response body
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: response body

```
[
  {
    actions: [ 'forward("http://myhost.com/messages/")', 'stop()' ],
    created_at: 'Mon, 26 Oct 2015 03:56:51 GMT',
    description: 'sample',
    expression: 'match_recipient(".*@example.com")',
    id: '562da483125730608a7d1719',
    priority: 0
  }
]
```

#### get

`mg.routes.get(id)`

Example:

```js
mg.routes.get('562da483125730608a7d1719')
  .then(data => console.log(data)) // logs response body
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: response body

```
{
  actions: [ 'forward("http://myhost.com/messages/")', 'stop()' ],
  created_at: 'Mon, 26 Oct 2015 03:56:51 GMT',
  description: 'sample',
  expression: 'match_recipient(".*@example.com")',
  id: '562da483125730608a7d1719',
  priority: 0
}
```

#### create

`mg.routes.create(options)`

Example:

```js
mg.routes.create({
    priority: 0,
    description: 'sample',
    expression: 'match_recipient(".*@example.org")',
    action: ['forward("http://myhost.com/messages/")', 'stop()']
  })
  .then(data => console.log(data)) // logs response body
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: response body

```
{
  actions: [ 'forward("http://myhost.com/messages/")', 'stop()' ],
  created_at: 'Mon, 26 Oct 2015 03:56:51 GMT',
  description: 'sample',
  expression: 'match_recipient(".*@example.com")',
  id: '562da483125730608a7d1719',
  priority: 0
}
```

#### update

`mg.routes.update(id, options)`

Example:

```js
mg.routes.update('562da483125730608a7d1719', {
    priority: 0,
    description: 'sample',
    expression: 'match_recipient(".*@example.org")',
    action: ['forward("http://myhost.com/messages/")', 'stop()']
  })
  .then(data => console.log(data)) // logs response body
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: response body

```
{
  actions: [ 'forward("http://myhost.com/messages/")', 'stop()' ],
  created_at: 'Mon, 26 Oct 2015 03:56:51 GMT',
  description: 'sample',
  expression: 'match_recipient(".*@example.com")',
  id: '562da483125730608a7d1719',
  message: 'Route has been updated',
  priority: 0
}
```

#### destroy

`mg.routes.destroy(id)`

Example:

```js
mg.routes.destroy('562da483125730608a7d1719')
  .then(data => console.log(data)) // logs response body
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: response body

```
{
  id: '562da483125730608a7d1719',
  message: 'Route has been deleted'
}
```

### validate

#### get

`mg.validate.get(address)`

Example:

```js
mg.validate.get('alice@example.com')
  .then(data => console.log(data)) // logs response body
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: response body

```
{
  address: 'alice@example.com',
  did_you_mean: null,
  is_valid: false,
  parts: { display_name: null, domain: null, local_part: null }
}
```

### parse

#### get

`mg.parse.get(addresses, enableDnsEspChecks)`

Example:

```js
mg.parse.get('Alice <alice@example.com>, example.com', true)
  .then(data => console.log(data)) // logs response body
  .catch(err => console.log(err)); // logs any error
```

Promise Returns: response body

```
{
  parsed: [],
  unparseable: [
    'Alice <alice@example.com>',
    'example.com'
  ]
}
```

## Browser Demo

![image](https://cloud.githubusercontent.com/assets/399776/10718632/e8fe56e4-7b34-11e5-84c8-cfcfde978711.png)

For this demo to work, you'll need to install and run `http-proxy` locally. Install it with:

```sh
npm install -g http-proxy
```

Then run the following command from the mailgun-js directory:

```sh
http-server -p 4001 --proxy="https://api.mailgun.net"
```

Demo should be up and running at http://0.0.0.0:4001/examples/

# Development

## Requirements

- Requires node.js >= 4.x

Install node dependencies with:

```sh
npm install
```

## Build

```sh
npm run build
```

## Tests

```sh
npm run tests
```

Watch tests with

```sh
npm run watch-tests
```

## Release Process

Releases occur after feature branches have been tested and merged into master.

First, checkout master and pull the latest commits.

```sh
git checkout master
git pull
```

Next, determine semantic version bump (major/minor/patch). Then run `npm version` with the appropriate keyword.

```sh
npm version patch -m "chore(release): added %s"
```

Other examples:

```sh
npm version major -m "chore(release): added %s"
npm version minor -m "chore(release): added %s"
npm version patch -m "chore(release): added %s"
```

## TODO

- add missing services
  - Lists
    - `lists.list(query)`
    - `list.get(address)`
    - `list.create(data)`
    - `list.update(address, data)`
    - `list.destroy(address)`
    - `lists.listMembers(address, query)`
    - `list.getMember(address, memberAddress)`
    - `list.createMember(address, data)` (singe & json batch upload)
    - `list.updateMember(address, memberAddress, data)`
    - `list.updateMember(address, memberAddress, data)`
    - `list.destroyMember(address, memberAddress)`
- add browser demo to heroku
