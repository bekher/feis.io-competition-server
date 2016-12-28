'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('competition service', function() {
  it('registered the competitions service', () => {
    assert.ok(app.service('competitions'));
  });
});
