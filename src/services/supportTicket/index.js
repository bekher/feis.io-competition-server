'use strict';

const service = require('feathers-mongoose');
const supportTicket = require('./supportTicket-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: supportTicket,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/supportTickets', service(options));

  // Get our initialize service to that we can bind hooks
  const supportTicketService = app.service('/supportTickets');

  // Set up our before hooks
  supportTicketService.before(hooks.before);

  // Set up our after hooks
  supportTicketService.after(hooks.after);
};
