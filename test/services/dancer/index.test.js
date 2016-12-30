'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('dancer service', function() {
  it('registered the dancers service', () => {
    assert.ok(app.service('dancers'));
  });
});
