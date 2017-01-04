'use strict';

// src/services/competition/hooks/populate-comp.js

/* TODO:
 *   Populate & verify feis field,
 *            round field
 *            current round field
 *  Make sure the current user is signed up for the feis, and has rights to add for current comp
 */
const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook, next) {
    hook.populateComp = true;
    const Rounds = hook.app.service('rounds');
    Rounds.find(['competitionId', hook.result._id], function(err, stuff) {
      if (!err ) {
        hook.result.rounds = !!stuff ? stuff.data : []
        console.log(hook.result)
      } else {
        throw new Error("Error in comp hook");
        console.log(err)
      }
      next()
    });

    // can assume hook.params.user is available
      /*
    const feisId = hook.data.feis;
    console.log(hook.data);
    if (feisId) {
      const Feis = hook.app.service('feis');
      const f =  Feis.get(feisId);
      console.log(f);
      Feis.findById(feis, function(err, feis) {
        if (err) {
          throw new Error('Cannot find feis with id');
        } else {
          user = hook.params.user;
          console.log(user);
          if (
        }
      });
    }
      */
  };
};
