'use strict';

const assert = require('assert');
const populateComp = require('../../../../src/services/competition/hooks/populate-comp.js');

describe('competition populateComp hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    populateComp()(mockHook);

    assert.ok(mockHook.populateComp);
  });
});
