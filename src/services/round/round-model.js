'use strict';

// round-model.js - A mongoose model

const mongoose = require('mongoose');
const idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema;

const roundSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },

  feis: {
    type: Schema.Types.ObjectId,
    ref: 'feis',
    required: true
  },
  competition: {
    type: Schema.Types.ObjectId,
    ref: 'competition',
    required: true,
    refConditions: {
      feis: function() {
        return this.feis;
      }
    }
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
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  judges: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],
  dancers: [{
    type: Schema.Types.ObjectId,
    ref: 'dancer'
  }],
});

roundSchema.plugin(idvalidator);

const roundModel = mongoose.model('round', roundSchema);

module.exports = roundModel;
