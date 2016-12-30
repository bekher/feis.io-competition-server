'use strict';

// dancer-model.js - A mongoose model
// TODO: validate name lengths

const mongoose = require('mongoose');
const idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema;

const dancerSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
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
  externalID: { //feis.io registration id, must validate
    type: String
  },
  danceInfo: [{
    round: {
      type: Schema.Types.ObjectId,
      ref: 'round'
    }, 
    set: {
      name: {
        type: String,
      },
      speed: { // BPM
        type: Number,
      },
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
  /*
  rounds: [{
    type: Schema.Types.ObjectId,
    ref: 'round'
  }],
  competitions: [{
    type: Schema.Types.ObjectId,
    ref: 'round'
  }],
  /scoresheets: [{
  }],
  */

});

dancerSchema.plugin(idvalidator);
const dancerModel = mongoose.model('dancer', dancerSchema);

module.exports = dancerModel;
