'use strict';
const supportTicket = require('./supportTicket');
const supportTicket = require('./supportTicket');
const supportTicket = require('./support_ticket');
const scoresheet = require('./scoresheet');
const dancer = require('./dancer');
const round = require('./round');
const feis = require('./feis');
const competition = require('./competition');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(competition);
  app.configure(feis);
  app.configure(round);
  app.configure(dancer);
  app.configure(scoresheet);
  app.configure(supportTicket);
};
