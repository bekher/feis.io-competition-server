'use strict';

const populateComp = require('./populate-comp');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;
const service = require('feathers-mongoose');

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    //populateComp()
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
// populate useful fields
const schema = {
  permissions: '...',
  include: [
    {
      service: 'rounds',
      parentField: '_id',
      childField: 'competitionId',
      nameAs: 'rounds',
      asArray: true,
    }
  ]
}
exports.after = {
  all: [
    service.hooks.toObject({})
  ],
  find: [
    hooks.populate({schema: schema})
  ],
  get: [
    hooks.populate({schema: schema})
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
};
