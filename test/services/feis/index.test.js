'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('feis service', function() {
  it('registered the feis service', () => {
    assert.ok(app.service('feis'));
  });
});
