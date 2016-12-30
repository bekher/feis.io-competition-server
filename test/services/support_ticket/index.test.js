'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('support_ticket service', function() {
  it('registered the support_tickets service', () => {
    assert.ok(app.service('support_tickets'));
  });
});
