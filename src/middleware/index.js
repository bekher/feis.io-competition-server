'use strict';

const ping = require('./ping');

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.get('/ping', ping(app));
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
