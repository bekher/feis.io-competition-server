

// scoresheet-model.js - A mongoose model
// 
/* TODO: figure out scores subdoc,
 *       validation
 */

const mongoose = require('mongoose');
const idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema;

const scoresheetSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  feis: {
    type: Schema.Types.ObjectId,
    ref: 'feis',
    required: true
  },
  dancer: {
    type: Schema.Types.ObjectId,
    ref: 'dancer',
    required: true
  },
  judge: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  scoringStatus: {
    type: String,
    required: true,
    enum: ['not_accessed', 'in_progress', 'complete', 'finalized'],
    default: 'in_progress'
  },
  set: {
    name: {
      type: String,
    },
    speed: { //bpm
      type: Number,
    }
  },
  danceType: {
    type: String,
    required: true
  },
  shoeType: {
    type: String,
    enum: ['hard','soft','other'],
    required: true,
  }

});

scoresheetSchema.plugin(idvalidator);
const scoresheetModel = mongoose.model('scoresheet', scoresheetSchema);

module.exports = scoresheetModel;
