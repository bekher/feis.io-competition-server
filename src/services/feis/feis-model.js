'use strict';

// feis-model.js - A mongoose model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feisSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  venue: {
    name: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    country: {
      type: String
    },
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
});

const feisModel = mongoose.model('feis', feisSchema);

module.exports = feisModel;
