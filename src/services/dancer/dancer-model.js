'use strict';

// dancer-model.js - A mongoose model
// TODO: validate name lengths
// TODO: validate number not already exists for feis id

const mongoose = require('mongoose');
const idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema;

const dancerSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  /* TODO: add this in 
  feis: {
    type: Schema.Types.ObjectId,
    ref: 'feis',
    required: true
  },
  */
  competitionIds: [{
    type: Schema.Types.ObjectId,
    ref: 'competition'
  }],
  number: {
    type: Number,
    required: true
  },
  firstName: { 
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
   required: true,
    enum: ['male', 'female', 'other']
  },
  externalId: { //feis.io registration id, must validate, must scrub when sending out 
    type: String
  },
  danceInfo: [{
    roundId: {
      type: Schema.Types.ObjectId,
      ref: 'round'
    }, 
    setName: {
      type: String,
    }, 
    setSpeed: {
      type: Number, //BPM
    },
    danceType: {
      type: String,
    },
    shoeType: {
      type: String,
      enum: ['hard', 'soft', 'other']
    },
    isPresent: {
      type: Boolean,
      default: false
    }
  }],
  /* not needed
  scoresheetIds: [{
    type: Schema.Types.ObjectId,
    ref: 'scoresheet'
  }],
  */

});

dancerSchema.plugin(idvalidator);
const dancerModel = mongoose.model('dancer', dancerSchema);

module.exports = dancerModel;
