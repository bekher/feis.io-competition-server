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
    hooks.iff(globalHooks.isJudge(), auth.restrictToOwner({ownerField: 'judgeId'})),
  ],
  find: [
    auth.queryWithCurrentUser({as: 'judgeId'}),
  ],
  get: [
    auth.queryWithCurrentUser({as: 'judgeId'})
  ],
  create: [
    auth.associateCurrentUser({as: 'judgeId'}),
    hooks.iff(globalHooks.isJudge(), hooks.remove('judgeId'))
  ],
  update: [
    hooks.setUpdatedAt('updatedAt'),
    auth.associateCurrentUser({as: 'judgeId'}),
    hooks.iff(globalHooks.isJudge(), hooks.remove('judgeId'))
  ],
  patch: [
    hooks.setUpdatedAt('updatedAt'),
    auth.associateCurrentUser({as: 'judgeId'}),
    hooks.iff(globalHooks.isJudge(), hooks.remove('judgeId'))
  ],
  remove: [
    auth.restrictToRoles({roles:['admin','organizer']})
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
