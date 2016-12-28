'use strict';

const service = require('feathers-mongoose');
const feis = require('./feis-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: feis,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/feis', service(options));

  // Get our initialize service to that we can bind hooks
  const feisService = app.service('/feis');

  // Set up our before hooks
  feisService.before(hooks.before);

  // Set up our after hooks
  feisService.after(hooks.after);
};
