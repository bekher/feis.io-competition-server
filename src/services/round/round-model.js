'use strict';

// round-model.js - A mongoose model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roundSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },

  feis: {
    type: Schema.types.ObjectId,
    ref: 'feis',
    required: true
  },
  competition: {
    type: Schema.types.ObjectId,
    ref: 'competition',
    required: true
  },
  number: {
    type: Number,
    required: true
  }, 
  location: {
    type: String,
    required: true
  },
  danceType: {
    type: String,
    required: true
  },
  shoeType: {
    type: String,
    enum: ['hard','soft','other'],
    required: true,
  },
  judgingStatus: {
    type: String,
    enum: ['notStarted', 'started', 'ended'],
    required: true,
    default: 'notStarted'
  },
  stageManager: {
    type: Schema.types.ObjectId,
    ref: 'user',
  },
  judges: [{
    type: Schema.types.ObjectId,
    ref: 'user',
  }],
  dancers: [{
    type: Schame.types.ObjetId,
    ref: 'dancer'
  }],
});

const roundModel = mongoose.model('round', roundSchema);

module.exports = roundModel;
