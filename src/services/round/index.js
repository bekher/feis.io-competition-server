'use strict';

const service = require('feathers-mongoose');
const round = require('./round-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: round,
    paginate: {
      default: 15,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/rounds', service(options));

  // Get our initialize service to that we can bind hooks
  const roundService = app.service('/rounds');

  // Set up our before hooks
  roundService.before(hooks.before);

  // Set up our after hooks
  roundService.after(hooks.after);
};
