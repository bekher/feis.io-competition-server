'use strict';

const service = require('feathers-mongoose');
const scoresheet = require('./scoresheet-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: scoresheet,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/scoresheets', service(options));

  // Get our initialize service to that we can bind hooks
  const scoresheetService = app.service('/scoresheets');

  // Set up our before hooks
  scoresheetService.before(hooks.before);

  // Set up our after hooks
  scoresheetService.after(hooks.after);
};
