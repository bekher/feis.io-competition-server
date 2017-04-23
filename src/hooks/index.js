'use strict';

// Add any common hooks you want to share across services in here.
// 
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

exports.myHook = function(options) {
  return function(hook) {
    console.log('My custom global hook ran. Feathers is awesome!');
  };
};

exports.isNotAdmin = adminRole => hook => hook.params.user.roles.indexOf(adminRole || 'admin' || 'organizer') === -1
exports.isJudge = judgeRole => hook => hook.params.user.roles.indexOf(judgeRole || 'judge') === -1;
