'use strict';

// competition-model.js - A mongoose model
//
const mongoose = require('mongoose');
const idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema;

const competitionSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  feis: {
    type: Schema.Types.ObjectId,
    ref: 'feis',
    required: true
  },
  ageGroup: {
    type: String,
  },
  estStartTime: {
    type: Date
  },
  judgingStatus: {
    type: String,
    enum: ['notStarted', 'started', 'ended'],
    required: true,
    default: 'notStarted'
  },
  isSingleRound: {
    type: Boolean,
    default: false
  },
  rounds: [{
    type: Schema.Types.ObjectId, 
    ref: 'Round',
  }],
  currentRound: {
    type: Schema.Types.ObjectId,
    ref: 'Round',
  }
});

const competitionModel = mongoose.model('competition', competitionSchema);

competitionSchema.plugin(idvalidator)

module.exports = competitionModel;
