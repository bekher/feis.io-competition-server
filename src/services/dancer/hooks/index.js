'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;
const service = require('feathers-mongoose');

const isNotAdmin = adminRole => hook => hook.params.user.roles.indexOf(adminRole || 'admin' || 'organizer') === -1;
const isJudge = judgeRole => hook => hook.params.user.roles.indexOf(judgeRole || 'judge') === -1;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    hooks.iff(isNotAdmin(), hooks.remove('externalId')),
    hooks.iff(isJudge(), hooks.remove(['firstName', 'lastName'])),
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
    service.hooks.toObject({}),
    hooks.iff(isNotAdmin(), hooks.remove('externalId')),
    hooks.iff(isJudge(), hooks.remove(['firstName', 'lastName'])),
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
