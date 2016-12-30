'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('scoresheet service', function() {
  it('registered the scoresheets service', () => {
    assert.ok(app.service('scoresheets'));
  });
});
