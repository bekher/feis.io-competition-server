'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [
    auth.restrictToRoles({
      roles: ['admin']
    })
  ],
  update: [
    auth.restrictToRoles({
      roles: ['admin', 'organizer']
    })
  ],
  patch: [
    auth.restrictToRoles({
      roles: ['admin', 'organizer']
    })
  ],
  remove: [
    auth.restrictToRoles({
      roles: ['admin']
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
