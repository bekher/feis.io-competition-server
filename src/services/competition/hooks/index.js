'use strict';

const populateComp = require('./populate-comp');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    populateComp()
  ],
  find: [],
  get: [],
  create: [
    auth.restrictToRoles({
      roles: ['admin', 'organizer']
    })
  ],
  update: [
    auth.restrictToRoles({
      roles: ['admin', 'organizer', 'stagemgr']
    })
  ],
  patch: [
    auth.restrictToRoles({
      roles: ['admin', 'organizer', 'stagemgr']
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
