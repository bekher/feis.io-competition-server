'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('round service', function() {
  it('registered the rounds service', () => {
    assert.ok(app.service('rounds'));
  });
});
