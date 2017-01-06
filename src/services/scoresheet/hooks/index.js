'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToRoles({
      roles: ['admin', 'judge', 'organizer']
    }),
  ],
  find: [],
  get: [],
  create: [],
  update: [
    hooks.setUpdatedAt('updatedAt')
  ],
  patch: [
    hooks.setUpdatedAt('updatedAt')
  ],
  remove: []
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
