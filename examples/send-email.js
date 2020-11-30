// require('babel/register'); // uncomment this for node versions < 4

var fs = require('fs');
var mailgun = require('../index');
var mg = mailgun.client({username: 'api', key:  process.env.MAILGUN_API_KEY || ''});

var domain = 'sandbox-123.mailgun.com';
var fromEmail = 'Excited User <mailgun@sandbox-123.mailgun.com>';
var toEmails = ['you@example.com']

var mailgunLogo = fs.createReadStream(__dirname + '/mailgun.png');
var rackspaceLogo = fs.createReadStream(__dirname + '/rackspace.png');

mg.messages.create(domain, {
    from: fromEmail,
    to: toEmails,
    subject: "Hello",
    html: '<img src="cid:mailgun.png" width="200px"><br><h3>Testing some Mailgun awesomness!</h3>',
    text: 'Testing some Mailgun awesomness!',
    inline: [mailgunLogo],
    attachment: [rackspaceLogo]
  })
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
