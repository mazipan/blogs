const wintersmith = require('wintersmith');
const log = require('console-emoji');
const opn = require('opn');

let env = wintersmith('./config.json');
// preview
env.preview(function(error, server) {
  if (error) throw error;
  log('  :running:  You are in development mode...', 'green');
  opn('http://localhost:8080/', {app: ['google chrome']});
});
