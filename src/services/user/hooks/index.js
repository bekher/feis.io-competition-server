'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks-common');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [],
  find: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  get: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' })
  ],
  create: [
    auth.hashPassword()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' }),
    hooks.setUpdatedAt('updatedAt')
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' }),
    hooks.setUpdatedAt('updatedAt')
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: '_id' })
  ]
};

// schema to populate
const schema= {
  permissions: '...',
  include: [
    {
      service: 'feis',
      nameAs: 'currentFeis',
      parentField: 'currentFeis',
      childField: '_id'
    }, {
      service: 'feis',
      nameAs: 'feises',
      parentField: 'feises',
      childField: '_id'
    }, /*{
      service: 'competition',
      nameAs: 'competitions',
      parentField: 'competitions',
      childField: '_id'
    }*/
  ],
}
exports.after = {
  all: [
    hooks.remove('password'),
    hooks.populate({schema: schema})
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
