'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;
const mongoose = require('feathers-mongoose');

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    hooks.iff(globalHooks.isNotAdmin(), hooks.remove('externalId')),
    hooks.iff(globalHooks.isJudge(), hooks.remove(['firstName', 'lastName'])),
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
    }),
    hooks.setUpdatedAt('updatedAt')
  ],
  patch: [
     auth.restrictToRoles({
      roles: ['admin', 'organizer', 'stagemgr']
    }),
    hooks.setUpdatedAt('updatedAt')
   ],
  remove: [
     auth.restrictToRoles({
      roles: ['admin', 'organizer']
    }) 
  ]
};

exports.after = {
  all: [
    mongoose.hooks.toObject({}),
    hooks.iff(globalHooks.isNotAdmin(), hooks.remove('externalId')),
    hooks.iff(globalHooks.isJudge(), hooks.remove(['firstName', 'lastName'])),
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
