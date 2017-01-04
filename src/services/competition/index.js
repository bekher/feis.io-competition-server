'use strict';

const service = require('feathers-mongoose');
const competition = require('./competition-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: competition,
    paginate: {
      default: 15,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/competitions', service(options));

  // Get our initialize service to that we can bind hooks
  const competitionService = app.service('/competitions');

  // Set up our before hooks
  competitionService.before(hooks.before);

  // Set up our after hooks
  competitionService.after(hooks.after);
};
