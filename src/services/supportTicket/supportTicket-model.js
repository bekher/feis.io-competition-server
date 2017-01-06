'use strict';

// supportTicket-model.js - A mongoose model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supportTicketSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  fulfilled: {
    type: Boolean,
    required: true,
    default: false
  }
});

const supportTicketModel = mongoose.model('supportTicket', supportTicketSchema);

module.exports = supportTicketModel;
