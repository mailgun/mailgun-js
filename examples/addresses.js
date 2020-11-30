// require('babel/register'); // uncomment this for node versions < 4

const mailgun = require('../index');
const mg = mailgun.client({
  username: 'api',
  key:  process.env.MAILGUN_API_KEY || '',
  public_key: process.env.MAILGUN_PUBLIC_KEY || ''
});

mg.validate.get('Alice <alice@example.com>')
  .then(data => console.log('validate: ', data))
  .catch(err => console.log(err));

mg.parse.get(['Alice <alice@example.com>', 'bob@example.com', 'example.com'])
  .then(data => console.log('parse: without dns/esp checks', data))
  .catch(err => console.log(err));

mg.parse.get('Alice <alice@example.com>, bob@example.com, example.com', true)
  .then(data => console.log('parse: with dns/esp checks', data))
  .catch(err => console.log(err));
