const wintersmith = require('wintersmith');
const log = require('console-emoji');

let env = wintersmith('./config.json');
// build site
env.build(function(error) {
  if (error) throw error;
  log(':ok_hand:  Building file was done...', 'ok');
});
