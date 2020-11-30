// require('babel/register'); // uncomment this for node versions < 4

const mailgun = require('../index');
const mg = mailgun.client({username: 'api', key:  process.env.MAILGUN_API_KEY || ''});

mg.domains.list()
  .then(domains => console.log(domains))
  .catch(err => console.log(err));
