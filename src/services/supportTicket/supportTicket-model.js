'use strict';

// supportTicket-model.js - A mongoose model

const mongoose = require('mongoose');
const idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema;

const supportTicketSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  feisId: {
    type: Schema.Types.ObjectId,
    ref: 'feis',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  isFulfilled: {
    type: Boolean,
    required: true,
    default: false
  }
});

const supportTicketModel = mongoose.model('supportTicket', supportTicketSchema);

competitionSchema.plugin(idvalidator)

module.exports = supportTicketModel;
