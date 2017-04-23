'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [
  ],
  get: [
  ],
  create: [
     auth.restrictToRoles({
      roles: ['admin', 'organizer']
    }) 
  ],
  update: [
    hooks.setUpdatedAt('updatedAt'),
     auth.restrictToRoles({
      roles: ['admin', 'organizer']
    }) 
  ],
  patch: [
    hooks.setUpdatedAt('updatedAt'),
     auth.restrictToRoles({
      roles: ['admin', 'organizer']
    }) 
  ],
  remove: [
     auth.restrictToRoles({
      roles: ['admin', 'organizer']
    }) 
  ]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
