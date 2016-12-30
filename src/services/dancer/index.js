'use strict';

const service = require('feathers-mongoose');
const dancer = require('./dancer-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: dancer,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/dancers', service(options));

  // Get our initialize service to that we can bind hooks
  const dancerService = app.service('/dancers');

  // Set up our before hooks
  dancerService.before(hooks.before);

  // Set up our after hooks
  dancerService.after(hooks.after);
};
