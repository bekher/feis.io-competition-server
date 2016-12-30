'use strict';

const service = require('feathers-mongoose');
const support_ticket = require('./support_ticket-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: support_ticket,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/support_tickets', service(options));

  // Get our initialize service to that we can bind hooks
  const support_ticketService = app.service('/support_tickets');

  // Set up our before hooks
  support_ticketService.before(hooks.before);

  // Set up our after hooks
  support_ticketService.after(hooks.after);
};
