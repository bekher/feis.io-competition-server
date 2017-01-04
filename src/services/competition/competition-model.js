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
  feisId: {
    type: Schema.Types.ObjectId,
    ref: 'feis',
    required: true
  },
  ageGroup: {
    // will we actually use this?
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
  roundIds: [{
    type: Schema.Types.ObjectId, 
    ref: 'Round',
  }],
  currentRoundId: {
    type: Schema.Types.ObjectId,
    ref: 'Round',
  }
});

const competitionModel = mongoose.model('competition', competitionSchema);

competitionSchema.plugin(idvalidator)

module.exports = competitionModel;
