'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('supportTicket service', function() {
  it('registered the supportTickets service', () => {
    assert.ok(app.service('supportTickets'));
  });
});
