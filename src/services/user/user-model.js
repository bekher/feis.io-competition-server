'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },

  roles: [{
    type: String,
    required: true,
    enum: ['admin', 'judge', 'stagemgr', 'organizer']
  }],

  firstname: {
    type: String,
    required: true,
  }, 

  lastname: {
    type: String,
    required: true,
  },

  feises: {
    type: Schema.Types.ObjectId,
    ref: 'feis'
  },

});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
